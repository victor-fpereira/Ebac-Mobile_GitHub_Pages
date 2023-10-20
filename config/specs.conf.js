require('dotenv').config()

let specsConfig = process.env.PLATFORM == 'android' ? {
    specs: [
        './tests/specs/android/cadastro-produto.spec.js'
    ]
} : {
    specs: [
        './tests/specs/ios/add-carrinho.spec.js'
    ]
}

module.exports = { specsConfig }