const woo_commerce = require('../screens/android/woo-commerce.screen');

describe('Cadastro de produto', () => {


    class Product {
        constructor(productName, productDescription, productPrice, productSalePrice, weight, length, width, height) {
            this.productName = productName;
            this.productDescription = productDescription;
            this.productPrice = productPrice;
            this.productSalePrice = productSalePrice;
            this.weight = weight;
            this.length = length;
            this.width = width;
            this.height = height;

        }
    }

    class Login {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    }

    it('Verificar se um usuário pode cadastrar um produto com informações detalhadas', async () => {

        const loginOne = new Login('lojaebacqe@gmail.com', 'GD*peToHNJ1#c$sgk08EaYJQ');
        const productOne = new Product('Caneta Bic', 'Caneta Bic Azul', '4', '3.5', '0.1', '10', '10', '10');

        await woo_commerce.login(loginOne.username, loginOne.password);
        await woo_commerce.openStore();
        await woo_commerce.addProductNameAndDescription(productOne.productName, productOne.productDescription);
        await woo_commerce.addProductPrice(productOne.productPrice, productOne.productSalePrice);
        await woo_commerce.addShippingDetails(productOne.weight, productOne.length, productOne.width, productOne.height);
        await woo_commerce.searchProduct(productOne.productName);
        await woo_commerce.assertProduct(productOne.productName);
    });

    it('Verificar se um usuário pode cadastrar um produto com informações mínimas', async () => {
        const loginOne = new Login('lojaebacqe@gmail.com', 'GD*peToHNJ1#c$sgk08EaYJQ');
        const productOne = new Product('Lapiseira', 'Lapiseira de ponta fina', '4', '3.5', '0.1', '10', '10', '10');
        await woo_commerce.login(loginOne.username, loginOne.password);
        await woo_commerce.openStore();
        await woo_commerce.addProductNameAndDescription(productOne.productName, productOne.productDescription);
    });

});