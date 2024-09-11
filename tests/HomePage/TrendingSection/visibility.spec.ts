import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  // connect to local host main page
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Should have title and elements visible", async ({ page }) => {
    // expect title to be visible
    await expect(
      page.getByRole("heading", { name: "Trending Books 🔥" })
    ).toBeVisible();

    // expect to render 6 books
    for (let i = 0; i < 6; i++) {
      // expect book
      await expect(page.getByTestId("trending-book").nth(i)).toBeVisible();
      // expect bookmark button
      await expect(page.getByTestId("bookmark-add").nth(i)).toBeVisible();
    }
  });
});
