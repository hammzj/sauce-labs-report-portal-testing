const ReportPortalService = require("wdio-reportportal-service");
const ReportPortalReporter = require("wdio-reportportal-reporter");
const chromeCapabilities = require('./chrome.capabilities');
exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [chromeCapabilities],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'sauce',
        [ReportPortalService, {}]
    ],
    framework: 'jasmine',
    reporters: [
        'dot',
        [
            ReportPortalReporter, {
            reportPortalClientConfig: {
                token: process.env.REPORT_PORTAL_TOKEN,
                endpoint: process.env.REPORT_PORTAL_API_URL,
                project: 'DEFAULT_PERSONAL',
                launch: 'ISSUE_1723',
                mode: 'DEFAULT',
                debug: false,
                rerun: false,
                attributes: []
            },
            reportSeleniumCommands: false,
            seleniumCommandsLogLevel: 'debug',
            autoAttachScreenshots: true,
            screenshotsLogLevel: 'info',
            sanitizeErrorMessages: true,
            sauceLabOptions: {
                enabled: true,
                sldc: 'us'
            }
        }
        ]
    ],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function (passed, assertion) {
        }
    },
}
