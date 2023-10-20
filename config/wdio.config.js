const { localConf } = require('./local.conf')

require('dotenv').config()


function getConfig(){
    switch(process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf
    }
}

exports.config = getConfig()