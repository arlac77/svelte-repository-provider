import { Selector } from "testcafe";

export const base =
  "http://localhost:3000/services/svelte-repository-provider/";

fixture`attributes`.page`${base}index.html`;

test("attributes", async t => {
  await t.expect(Selector('#a1').value).contains('value a1');
  await t.expect(Selector('#s1').value).contains('value s1');
});

