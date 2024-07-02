const pino = require('pino');
const pinoCaller = require('pino-caller');
const moment = require('moment');

const { LOG_LEVEL } = require('./environments');

const options = {
  level: LOG_LEVEL,
  timestamp: () => `,"time":"${moment().format('DD-MM-YYYY HH:mm:ss.SSS')}"`,
  minLength: 4096,
  sync: false,
  formatters: {
    level: (label: any) => ({ level: label }),
    log: (obj: any) => {
      const callerInfo = obj.caller.split('\\').pop();
      const callerParts = callerInfo.split(':');
      const file = callerParts[0];
      const line = callerParts[1];
      return {
        ...obj,
        caller: `${file}:${line}`,
      };
    },
  },
};

export const logger = pinoCaller(pino(options));
