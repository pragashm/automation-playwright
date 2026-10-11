import { Page, expect } from '@playwright/test';
export class ProductPage {

    constructor(private page: Page) { };

    async filterBrand(brandName: string) {
        await this.closeAdIfVisible();
        await this.page.locator('.brands-name li').filter({ hasText: brandName }).click();
        console.log('Clicked Brand Name');
    }

    async addProduct(productName: string) {
        await this.closeAdIfVisible();
        const productCard = await this.page.locator('.single-products').filter({ hasText: productName }).first();
        await productCard.hover();
        await this.closeAdIfVisible();

        const productOverlay = productCard.locator('.product-overlay');

        await productOverlay
            .getByText('Add to cart')
            .click(); 
        await this.page.getByText('Continue Shopping', { exact: true }).first().click();
        await this.closeAdIfVisible();
    }

    async closeAdIfVisible() {
        for (const frame of this.page.frames()) {
            try {
                const closeButton = frame.locator(
                    '[aria-label="Close"], [aria-label="Close ad"]'
                ).first();

                if (await closeButton.isVisible().catch(() => false)) {
                    await closeButton.click({ timeout: 2000 });
                    console.log('Ad closed');
                    return;
                }
            } catch (error) {
                
            }
        }
    }


}