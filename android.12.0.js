//@see https://docs.saucelabs.com/dev/test-configuration-options/
module.exports = {
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 6 GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:app': 'storage:filename=mda-1.0.12-14.apk',
    'sauce:options': {
        appiumVersion: '1.22.1',
        timeZone: 'New_York',
        idleTimeout: 120,

        //custom tags appearing as [object Object]
        //@see https://docs.saucelabs.com/dev/test-configuration-options/#custom-data
        "custom-data": {"release": "1.0",
            "commit": "0k392a9dkjr",
            "staging": true,
            "execution_number": 5,
            "server": "test.customer.com"}
    }
};
