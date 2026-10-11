import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { env } from '../config/envConfig';
import { productData } from '../data/productData';


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
    await expect(page).toHaveTitle('Automation Exercise');

    //clear cart
    await cartPage.clearCart();
    await loginPage.visitURL('');

    //Select the product and add to cart
    await productPage.filterBrand(productData.brandName);
    await productPage.addProduct(productData.productName);

    //Go to Cart and Validate the products
    await cartPage.viewCart();
    await cartPage.validateProductInCart(productData.productName, productData.price, productData.quantity, productData.totalPrice);

    //Logout and re-login
    await loginPage.logout();
    await loginPage.loginToApp(env.userName, env.password);

    //Go to Cart and Validate the products one more time
    await cartPage.viewCart();
    await cartPage.validateProductInCart(productData.productName, productData.price, productData.quantity, productData.totalPrice);


})

