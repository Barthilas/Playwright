import { test } from "@playwright/test";

test("Download files", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/FileDownload.html");
  // pesky terms
  const consentButton = await page
    .getByLabel("Consent", { exact: true })
    .click();
  await page.waitForLoadState();
  // this is the case when you have to use deprecated type, with fill the submit button will still be disabled.
  await page.type("#textbox", "Like, share, comment and subscribe");

  await page.click("#createTxt");

  const download = await Promise.all([
    page.waitForEvent("download"),
    page.click("#link-to-download"),
  ]);

  //   const path = await download.path();

  // if you need to download the file locally.
  const fileName = download[0].suggestedFilename();
  await download[0].saveAs(fileName);
  console.log(fileName);
});

test("Upload file", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  //   await page.setInputFiles("input[type='file']", [
  //     "uploadItems/uploadTest.png",
  //   ]);

  // just a demo what this really does. (second parameter)
  const [uploadFiles, _] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("input[type='file']"),
  ]);

  const isMultiple = uploadFiles.isMultiple();
  console.log(isMultiple);

  uploadFiles.setFiles(["uploadItems/uploadTest.png", "uploadItems/uploadTest.png"]);
  await page.waitForTimeout(3000);
});
