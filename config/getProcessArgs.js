import getIP from './getIP';

export default function getProcessArgs(argv) {
  let HOST = 'localhost';
  let BUILD_PREVIEW = false;
  let IS_LOCAL_NET = false;
  let PRODUCTION = false;
  if (argv.length > 0) {
    argv.forEach(arg => {
      const splitedArg = arg.split('=');
      const value = splitedArg[1];
      switch (splitedArg[0]) {
        default:
          break;
        case '--HOST': {
          if (value === 'local') {
            HOST = getIP();
            if (!HOST) {
              HOST = '0.0.0.0';
            }
            IS_LOCAL_NET = true;
          } else {
            HOST = splitedArg[1];
          }
          break;
        }
        case '--PREVIEW': {
          BUILD_PREVIEW = true;
          console.log('### PREVIEW MODE ###')
          break;
        }
        case '--PROD': {
          PRODUCTION = true;
          break;
        }
      }
    });
  }
  return {
    HOST,
    BUILD_PREVIEW,
    IS_LOCAL_NET,
    PRODUCTION
  }
}