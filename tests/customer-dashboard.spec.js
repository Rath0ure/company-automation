import { test, expect, chromium } from "@playwright/test";
import { 
  LOGIN_URL,
  MOBILE_NUMBER_INPUT,
  NEXT_BUTTON,
  OTP_INPUT,
  SIGN_IN_BUTTON,
  PRODUCT_GET_STARTED_BUTTON,
  ORDERS_BUTTON,
  SHIP_BUTTON_GENERIC,
  SHIP_BUTTON_SHADOWFAX,
} from "./customerDashboardConstants";

test.describe("Customer Dashboard", () => {
  test("should display the customer dashboard", async () => {
    const browser = await chromium.launch({
      headless: false,
    });

    const context = await browser.newContext({
      permissions: ["local-network-access"],
    });

    const page = await context.newPage();
    await page.goto(LOGIN_URL);

    await page.fill(MOBILE_NUMBER_INPUT, "6203882355");
    await page.click(NEXT_BUTTON);

    // Enter OTP
    await page.fill(OTP_INPUT, "123456");
    await page.click(SIGN_IN_BUTTON);
    //wait for 10 seconds
    await page.waitForTimeout(1000);
    //click on the product get started button
    await page.click(
      PRODUCT_GET_STARTED_BUTTON,
    );
    //wait for 5 seconds
    await page.waitForTimeout(10000);
    //click on the orders button
    await page.click(ORDERS_BUTTON, {
      timeout: 10000,
    });
    //click on the ship button
    await page.locator(SHIP_BUTTON_GENERIC).first().click();
    //click on the shadowfax ship button
    await page.locator(SHIP_BUTTON_SHADOWFAX).click();
    //wait for 5 seconds
    await page.waitForTimeout(5000);
   
    await context.close();
  });
});
