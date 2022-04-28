const ReportPortalReporter = require('wdio-reportportal-reporter');
const ReportPortalService = require('wdio-reportportal-service');
const androidDeviceCapabilities = require('./android.12.0.js');
const capabilities =
    Object.assign({
            maxInstances: 1,
            acceptInsecureCerts: true
        },
        androidDeviceCapabilities);
exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    specs: ['./main/features/**/*.feature'],
    exclude: [],
    maxInstances: 1,
    capabilities: [capabilities],
    logLevel: 'info',
    logLevels: {
        'wdio-reportportal-service': 'debug',
        'wdio-reportportal-reporter': 'debug',
    },
    outputDir: './log',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 2,
    services: ['sauce', [ReportPortalService, {}]],
    framework: 'cucumber',
    reporters: [
        'spec',
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
            parseTagsFromTestTitle: false,
            cucumberNestedSteps: true,
            autoAttachCucumberFeatureToScenario: true,
            sanitizeErrorMessages: true,
            sauceLabOptions: {
                enabled: true,
                sldc: 'us'
            }
        }]
    ],
    cucumberOpts: {
        require: ['./main/step_definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};
