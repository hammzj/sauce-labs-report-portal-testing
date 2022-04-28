# sauce-labs-report-portal-testing

See here:

https://github.com/reportportal/reportportal/issues/1723

## Setup

* Perform an `npm install`.
* Provide the following `process.env` variables:
    * `SAUCE_USERNAME`
    * `SAUCE_ACCESS_KEY`
    * `REPORT_PORTAL_API_URL`
    * `REPORT_PORTAL_TOKEN`
* Run the script `wdio` to execute the tests on the remote SauceLabs server.
* Check the results of launch "**ISSUE_1723**" on your Report Portal instance in your "**DEFAULT_PERSONAL**" project.

# Additional Information
Demo app and screen objects taken from the [WebDriverIO Native Demo App setup](https://github.com/webdriverio/native-demo-app).
