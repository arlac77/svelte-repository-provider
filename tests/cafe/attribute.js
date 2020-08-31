import { Selector } from "testcafe";

const base = "http://localhost:5000/components/svelte-repository-provider/example";

fixture`attributes`.page`${base}/index.html`;

test("attributes", async t => {
  await t.expect(Selector('#a1').value).contains('value a1');
  await t.expect(Selector('#s1').value).contains('value s1');
});

