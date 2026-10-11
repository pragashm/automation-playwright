import {Page, expect} from '@playwright/test';
export class CartPage {

    constructor(private page: Page){};

    async viewCart() {
        await this.page.getByRole('link', { name: 'Cart' }).first().click();
        await expect(this.page).toHaveTitle('Automation Exercise - Checkout');
    }

    async validateProductInCart(productName: string, price: string, quantity: string, totalPrice: string) {
        const productRow = this.page.locator('#cart_info_table tbody tr').filter({has: this.page.getByRole('link', {name: productName, exact:true})});
        await expect(productRow.locator('.cart_price')).toHaveText(price);
        await expect(productRow.locator('.cart_quantity button')).toHaveText(quantity);
        await expect(productRow.locator('.cart_total_price')).toHaveText(totalPrice);
    }

    async clearCart() {
        await this.page.goto('view_cart', {
            waitUntil: 'domcontentloaded',
            timeout: 60_000
        });
        if(await this.page.locator('.cart_quantity_delete').isVisible()){
            await this.page.locator('.cart_quantity_delete').click();
        }
        await expect(this.page.locator('#empty_cart > p.text-center > b')).toHaveText('Cart is empty!')
    }
    

}