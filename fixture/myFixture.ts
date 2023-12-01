import { test as myTest } from "@playwright/test";

type bart = {
  age: number;
  email: string;
};

const myFixtureTest = myTest.extend<bart>({
  age: 69,
  email: "kekw@dot.com",
});

export const test = myFixtureTest;