import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/login.page';
import {env} from '../config/envConfig';


test.beforeEach(async({ page })=> {
 // For Future
})

test('Login', async({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.visitURL();
    await loginPage.loginToApp(env.userName, env.password);

    await expect(page).toHaveTitle('Automation Exercise');
    
})

