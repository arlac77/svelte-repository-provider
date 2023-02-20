import { Selector } from "testcafe";

export const base =
  "http://localhost:5173/";

fixture`attributes`.page`${base}`;

test("attributes", async t => {
  await t.expect(Selector('#a1').value).contains('value a1');
  await t.expect(Selector('#s1').value).contains('value s1');
});

