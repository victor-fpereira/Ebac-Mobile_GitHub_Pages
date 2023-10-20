require('dotenv').config()

let reportersConfig = process.env.REPORT == 'true' ? {

    reporters: ['spec']

} : {}

module.exports = { reportersConfig }