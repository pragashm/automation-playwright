import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { env } from '../config/envConfig';

//Login to the application
test('Show product unavailable in the cart @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);

    //Login to the application
    await loginPage.visitURL('login');
    await loginPage.loginToApp(env.userName, env.password);

    //Mock the html response to give alert message
    await page.route('**/view_cart', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'text/html; charset=utf-8',
            body: `
        <!doctype html>
        <html>
          <head>
            <title>Cart</title>
          </head>
          <body>
            <h1>Shopping Cart</h1>
            <div role="alert">
              Blue Top is no longer available.
              Please shop for other products.
            </div>
            <p>Cart is empty!</p>
          </body>
        </html>
      `,
        });
    });

    await loginPage.visitURL('view_cart');

    //Verify product unavailable message
    await expect(page.getByRole('alert'))
        .toContainText('Blue Top is no longer available.');

    await expect(page.getByText('Cart is empty!'))
        .toBeVisible();

})

