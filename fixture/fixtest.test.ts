import { test } from "./myFixture";

test("fixture demo", async ({ page, age, email }) => {
  console.log(age, email);
});
