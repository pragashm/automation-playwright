import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { env } from '../config/envConfig';
const { testData } = require('../data/data');


test.beforeEach(async ({ page }) => {
    // For Future
})

test('Login and add the product to the cart @smoke @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    //Login to the application
    await loginPage.visitURL('login');
    await loginPage.loginToApp(env.userName, env.password);

    //clear cart as a pre-requisite
    await cartPage.clearCart();
    await loginPage.visitURL('products');

    //Select the product and add to cart
    await productPage.filterBrand(testData.brandName);
    await productPage.addProduct(testData.productName);

    //Go to Cart and Validate the products
    await cartPage.viewCart();
    await cartPage.validateProductInCart(testData.productName, testData.price, testData.quantity, testData.totalPrice);

    //Logout and re-login
    await loginPage.logout();
    await loginPage.loginToApp(env.userName, env.password);

    //Go to Cart and Validate the products one more time
    await cartPage.viewCart();
    await cartPage.validateProductInCart(testData.productName, testData.price, testData.quantity, testData.totalPrice);


})

