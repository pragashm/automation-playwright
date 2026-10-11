import { Page, expect } from '@playwright/test';
export class ProductPage {

    constructor(private page: Page) { };

    async filterBrand(brandName: string) {
        await this.closeAdIfVisible();
        await this.page.locator('.brands-name li').filter({ hasText: brandName }).click();
        console.log('Clicked Brand Name');
    }

    async addProduct(productName: string) {
        const productCard = await this.page.locator('.single-products').filter({ hasText: productName }).first();
        await productCard.hover();
        await this.closeAdIfVisible();

        const productOverlay = productCard.locator('.product-overlay');

        await productOverlay
            .getByText('Add to cart')
            .click(); 
        await this.page.getByText('Continue Shopping', { exact: true }).first();
        await this.closeAdIfVisible();
    }
    async closeAdIfVisible() {
        const adFrame = this.page.frameLocator('#google_esf');

        const closeButton = adFrame.getByRole('button', {
            name: 'Close ad',
            exact: true
        });

        if (await closeButton.isVisible().catch(() => false)) {
            await closeButton.click({ timeout: 3000 });
        }
    }


}