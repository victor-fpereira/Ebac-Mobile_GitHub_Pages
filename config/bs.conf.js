const { generalConfig } = require('./general.conf.js');

let capabilities = {

    user: process.env.BROWSERSTACK_USERNAME || 'vferreirap_9iJfD4',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '3z1ef9XQk5qLrtGmKLRV',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'EBAC_IOS',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: true
        },
      ],
      ['appium']
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'iPhone 12 Pro',
        platformVersion: '14',
        platformName: 'ios',
      }
    }],

}

let bsConfig = {
    ...generalConfig,
    ...capabilities
}

module.exports = { bsConfig }