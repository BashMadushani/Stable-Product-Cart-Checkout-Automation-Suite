# Stable Product Cart & Checkout Automation Suite

This project contains an automated end-to-end test suite for the SauceDemo e-commerce application using Playwright with TypeScript.

## Demo Website
https://www.saucedemo.com/

---

## Technologies Used

- Playwright
- TypeScript
- Node.js

---

## Test Scenarios Covered

1. Login using valid credentials
2. Verify Products page loads
3. Add Sauce Labs Backpack to cart
4. Verify cart badge updates
5. Open cart and verify selected product
6. Remove product from cart
7. Verify product removal
8. Add product again and proceed to checkout
9. Validate checkout form errors
10. Complete checkout successfully

---

## Test Data

| Field | Value |
|---|---|
| Username | standard_user |
| Password | secret_sauce |
| Product | Sauce Labs Backpack |
| First Name | Codezela |
| Last Name | QA |
| Postal Code | 00100 |

---

## Project Structure

```text
playwright-project/
│
├── tests/
│   └── cart-checkout-assessment.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
