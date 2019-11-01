import * as path from 'path';
import express from 'express';

import cors from 'cors';

import getProcessArgs from './getProcessArgs';
import getLogger from '../vendor/getLogger';

// SMALL SCRIPT TO TEST PRODUCTION BUILD


async function main() {

  const ARGS = getProcessArgs(process.argv);

  const logger = getLogger(
    {
      name: 'xavier-preview',
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
  const DIST_PATH = path.join(ROOT_PATH, './build');
  const PORT = 8080;

  logger.info('Preparing PRODUCTION PREVIEW server');

  const app = express();

  app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
  }));

  app.use(express.static(DIST_PATH));

  logger.info("Dist path: " + DIST_PATH)

  const server = app.listen(PORT, ARGS.HOST, (error) => {

    if (error) {
      return logger.error(error);
    }

    logger.log(`\n\nDev server listening on port ${PORT} at ${ARGS.HOST} \n\n`);
  })


};

main();