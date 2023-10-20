const hooks = require('./hooks.conf.js').hooksConfig
const reporters = require('./reports.conf.js').reportersConfig
const specs = require('./specs.conf.js').specsConfig

let generalConfig = {

    path: '/wd/hub',
    framework: 'mocha',
    logLevel: 'info',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
    maxInstances: 1,
    ...hooks,
    ...reporters,
    ...specs
}

module.exports = { generalConfig }