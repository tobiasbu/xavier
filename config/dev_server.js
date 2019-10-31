import * as path from 'path';
import express from 'express';
import webpack from 'webpack';


// import ip from 'ip';
// import cors from 'cors';
// const opn = require('opn');
import { GracefulShutdownManager } from '@moebius/http-graceful-shutdown';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfigFn from './webpack.config';
import stats from './stats';

import getLogger from '../vendor/getLogger';

async function main() {

  const logger = getLogger(
    {
      name: 'xavier-client',
      timestamp: true,
      symbol: ' \u26A1',
      errorSymbol: ' \u2622',
      bgPrefix: false,
    });


  process.on("unhandledRejection", (e) => {
    logger.error(`Unhandled rejection `, e.stack || e);
    process.exit(1);
  });

  process.on("uncaughtException", (e) => {
    logger.error(`Uncaught exception `, e.stack || e);
    process.exit(1);
  });

  // Declare constants
  const ROOT_PATH = path.join(__dirname, '..');
  const DIST_PATH = path.join(ROOT_PATH, './dist');


  logger.info('Preparing development server');

  // Get our configuration
  const config = webpackConfigFn({
    mode: 'development',
  });

  // Webpack compiler
  logger.log('Compiling...');

  let compiler;

  // await new Promise for webpack compiler... 
  // yes, this is necessary unfortunately
  // Webpack has a bug with 'ConcurrentCompilationError'.
  // It says 'You ran Webpack twice. Each instance only supports a single concurrent compilation at a time.'
  // see https://github.com/webpack/webpack-dev-middleware/issues/409
  await new Promise((resolve, reject) => {
    compiler = webpack(config, (err, stats) => {
      const info = stats.toJson();
      if (stats.hasErrors()) {
        logger.error("Client has errors. Please fix:\n", info.errors.join("\n\n"));
        return reject(err);
      }
      if (stats.hasWarnings()) {
        logger.warn("Client has warnings:\n:", info.warnings.join("\n\n"));
      }
      resolve();
    });
  });

  const serverPromise = new Promise((resolve, reject) => {
    // Server configuration
    const devMiddlewareConfig = {
      logger,
      stats,
      publicPath: config.output.publicPath,
      writeToDisk: true,
      logLevel: 'warn',
    }

    const devMiddleware = WebpackDevMiddleware(compiler, devMiddlewareConfig);
    const hotMiddleware = WebpackHotMiddleware(compiler, {
      log: logger.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    });

    const expressApp = express();
    expressApp.use(devMiddleware);
    expressApp.use(hotMiddleware);
    expressApp.use(express.static(DIST_PATH));

    const port = 3000;
    const server = expressApp.listen(port, 'localhost', (error) => {
      if (error) {
        logger.error('Could not start dev server:', error.join("\n\n"));
        return reject(error);
      }
      logger.log('Dev server listening in localhost port ' + port);
      resolve({ server, devMiddleware });
    });

    expressApp.get("/*", (req, res) => {
      res.status(301).redirect("/")
    });
  });

  const result = await serverPromise;


  return new Promise((resolve, reject) => {

    const shutdownManager = new GracefulShutdownManager(result.server);

    let exited = false;
    const onExit = (code) => {
      if (!exited) {
        exited = true;
        result.devMiddleware.close();
        // result.server.close((err) => {
        //   if (err) {
        //     logger.error(`\n\nServer exited with error`, err);
        //   } else {
        //     logger.info('\n\nServer exited successfully...');
        //   }
        // })
        shutdownManager.terminate(() => {
          logger.info('Server exited successfully...\n\n');
          resolve();
        });

      }

    }

    process.on('SIGTERM', onExit);
    // process.on('SIGINT', onExit);

  });
}

main();