import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  // option 2
  const frame = page.frameLocator("#firstFr");
  await frame.locator("input[name='fname']").fill("test data");

  // option 1
  //   const allFrames = page.frames();
  //   console.log("Frames: ", allFrames.length);

  //   const myFrame = page.frame("firstFr");
  //   if(myFrame)
  //   {
  //     await myFrame.fill("input[name='fname']", "test data");
  //     await myFrame.fill("input[name='lname']", "test data1");
  //   }

  //   expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have");

  // interact with child frame
  const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
  await innerFrame.locator("input[name='email']").fill("EMAIL");
});
