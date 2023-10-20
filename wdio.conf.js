exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'vferreirap_9iJfD4',
  key: process.env.BROWSERSTACK_ACCESS_KEY || '3z1ef9XQk5qLrtGmKLRV',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        app: 'bs://4ba9106edeab22639228de19c87dfde48ef26129',
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
