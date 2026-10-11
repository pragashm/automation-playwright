import {Page, expect} from '@playwright/test';
export class LoginPage {

    constructor(private page: Page){};

    async visitURL() {
        await this.page.goto('/login'); 
        console.log('TEsting login');
    }

    async loginToApp(userName: string, password: string) {
        await this.page.getByPlaceholder('Email Address').first().fill(userName);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByRole('link', { name: 'Logout' })).toBeVisible();
    }

    async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
        await expect(this.page.getByRole('link', { name: 'Signup / Login' })).toBeVisible();
    }
    

}