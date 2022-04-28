# Test suite for ReportPortal Issue 1723

See here:

https://github.com/reportportal/reportportal/issues/1723

## Setup

* Perform a `yarn install`.
* On your SauceLabs account, upload the file `./apps/mda-1.0.12-14.apk` to
  the [remote apps storage](https://docs.saucelabs.com/mobile-apps/app-storage/#uploading-apps-via-ui).
  * [App can also be found here](https://github.com/saucelabs/my-demo-app-android/releases/tag/1.0.12) 
* Provide the following `process.env` variables:
    * `SAUCE_USERNAME`
    * `SAUCE_ACCESS_KEY`
    * `REPORT_PORTAL_API_URL`
    * `REPORT_PORTAL_TOKEN`
* Run the script `run:wdio` to execute the Android Cucumber scenarios on the remote SauceLabs Appium server.
* Check the results of launch "**ISSUE_1723**" on your Report Portal instance in your "**DEFAULT_PERSONAL**" project.

# Additional Information
Demo app and screen objects taken from the [WebDriverIO Native Demo App setup](https://github.com/webdriverio/native-demo-app).
