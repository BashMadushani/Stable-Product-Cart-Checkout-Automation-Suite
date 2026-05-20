import { test, expect } from '@playwright/test';

test.describe('Cart Checkout Automation Suite', () => {

  const url = 'https://www.saucedemo.com/';
  const username = 'standard_user';
  const password = 'secret_sauce';

  const product = 'Sauce Labs Backpack';

  test('Full cart checkout flow', async ({ page }) => {

    // 1. Login
    await page.goto(url);
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');

    await expect(page.locator('.title')).toHaveText('Products');

    // 2. Add product to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 3. Open cart
    await page.click('.shopping_cart_link');
    await expect(page.locator('.inventory_item_name')).toHaveText(product);

    // 4. Remove product
    await page.click('[data-test^="remove"]');
    await expect(page.locator('.cart_item')).toHaveCount(0);

    // 5. Add again
    await page.click('[data-test="continue-shopping"]');
    await page.locator(`text=${product}`).locator('..').locator('button').click();

    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');

    // 6. Empty form validation
    await page.click('[data-test="continue"]');
    await expect(page.locator('[data-test="error"]')).toBeVisible();

    // 7. Fill checkout form
    await page.fill('[data-test="firstName"]', 'Codezela');
    await page.fill('[data-test="lastName"]', 'QA');
    await page.fill('[data-test="postalCode"]', '00100');

    await page.click('[data-test="continue"]');

    // 8. Finish order
    await page.click('[data-test="finish"]');

    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  });

});