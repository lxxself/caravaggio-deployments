const serverless = require('serverless-http');
const caravaggio = require('caravaggio').default;
const ONE_DAY = 60 * 60 * 24;

const config = {
  caches: {
    input: {
      type: 'memory',
      options: {
        limit: 100,
      }
    },
    output: {
      type: 'memory',
      options: {
        limit: 100,
      },
    },
  },
  browserCache: `s-maxage=${ONE_DAY}`,
  whitelist: [],
  errors: 'html',
  logger: {
    options: {
      level: process.env.LOG_LEVEL || 'info',
      prettyPrint: true,
    },
    destination: process.stdout,
  },
}

module.exports.handler = serverless(caravaggio(config), {
  binary: [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webm',
    'image/gif',
  ],
});

