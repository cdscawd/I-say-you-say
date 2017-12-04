/* eslint-disable no-console */

const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.yellow('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ! ${chalk.red('✓')}`);
    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.red('✓')}`);
    }

    console.log(`
      ${chalk.bold('Access URLs:')}${divider}
      Localhost: ${chalk.magenta(`🚀 http://${host}:${port}/v1/qoocoSessions/learner?sessionRequestId=58d1b23d602a4a0001e66f33&sessionStartAt=1507073590164&sessionEndAt=1507679587594&lessonSlug=1072_2932_34582&locale=zh_CN`)}
            LAN: ${chalk.magenta(`🏖 http://${ip.address()}:${port}/v1/qoocoSessions/learner?sessionRequestId=58d1b23d602a4a0001e66f33&sessionStartAt=1507073590164&sessionEndAt=1507679587594&lessonSlug=1072_2932_34582&locale=zh_CN`) +
      (tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};

module.exports = logger;
