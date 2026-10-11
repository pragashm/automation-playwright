import {test, expect} from '@playwright/test';

//Login to the application
test('Login', async({page})=> {
    await page.goto('https://www.automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
    
})

