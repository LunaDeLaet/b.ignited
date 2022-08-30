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
1. in terminal: appium --allow-insecure chromedriver_autodownload

## How to Run Your First Test
Here, we use:
* Android 8.0 emulator
* Demo APK
* Webdriver.io as our Appium client

#### Prerequisites
1. Set-Up and Run Android 8 Oreo Emulator on PC: https://www.techglobex.net/2017/09/how-to-install-run-android-8-oreo-on-pc-laptop.html
2. set up appium on windows for testing android devices: https://support.smartbear.com/testcomplete/docs/app-testing/mobile/device-cloud/configure-appium/android-on-windows.html 
2. Download this APK: https://github.com/appium/appium/raw/1.x/sample-code/apps/ApiDemos-debug.apk 

#### Setting up the Appium Client
1. npm install webdriverio

#### Session Initialization
1. create index.js file 
2. add code from https://appium.io/docs/en/about-appium/getting-started/?lang=en#running-test-commands 

#### Running Test Commands
1. run the emulator
2. node index.js




