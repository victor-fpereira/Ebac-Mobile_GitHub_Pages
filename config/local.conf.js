const { generalConf } = require('./general.conf.js');

let capabilities = {
    "platformName": "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "ebac-test3",
    "appium:automationName": "UiAutomator2",
    "appium:app": "D:\\workspace\\EBAC\\Modulo16\\Módulo 16 - Android Studio\\apps\\wcandroid-7.3.1.apk",
    "appium:appPackage": "com.woocommerce.android",
    "appium:appActivity": "ui.main.MainActivity",
    "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
    autoGrantPermissions: true,
    noReset: true,
    newCommandTimeout: 240
}

let localConf = {
    ...generalConf,
    ...capabilities,
    baseUrl: 'http://127.0.0.1',
    hostname: 'localhost',
    port: 4723,
    services: ['appium']
}

module.exports = { localConf }