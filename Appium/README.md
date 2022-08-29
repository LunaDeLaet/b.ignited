# Appium

## How to Install Appium
1. create new folder for your Appium project
2. npm init -y
3. npm install appium

## Verifying the Installation 
1. npm install appium-doctor
2. npx appium-doctor

## Appium Clients
These extend the regular old Selenium clients with additional functionality.

https://appium.io/docs/en/about-appium/appium-clients/index.html

## How to Start Appium
1. in terminal: appium

## How to Run Your First Test
Here, we use:
* Android 8.0 emulator
* Demo APK
* Webdriver.io as our Appium client

#### Prerequisites
1. Set-Up and Run Android 8 Oreo Emulator on PC
        eg. https://www.techglobex.net/2017/09/how-to-install-run-android-8-oreo-on-pc-laptop.html
2. Download this APK: https://github.com/appium/appium/raw/1.x/sample-code/apps/ApiDemos-debug.apk 

#### Setting up the Appium Client
1. npm install webdriverio

#### Session Initialization
1. create index.js file 
2.  

// javascript

const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    app: "/path/to/the/downloaded/ApiDemos-debug.apk",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World!");
  const value = await field.getText();
  assert.strictEqual(value,"Hello World!");

  await client.deleteSession();
}

main();

#### Running Test Commands
1. node index.js





