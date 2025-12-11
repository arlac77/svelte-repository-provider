import { test, expect } from "@playwright/test";

test("attributes", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.getByRole("textbox", { name: "a1" })).toHaveValue(
    "value a1"
  );
  await expect(page.getByRole("textbox", { name: "s1" })).toHaveValue(
    "value s1"
  );
});
