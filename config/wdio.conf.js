const { bsConfig } = require('./bs.conf')
const { localConfig } = require('./local.conf')

require('dotenv').config()


function getConfig(){
    switch(process.env.ENVIRONMENT) {
        case 'local': default:
            console.log('Local config: ', localConfig)
            return localConfig
        case 'browserstack':
            console.log('Browser Stack config: ', bsConfig)
            return bsConfig
    }
}

exports.config = getConfig()