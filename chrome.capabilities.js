// //@see https://docs.saucelabs.com/dev/test-configuration-options/
module.exports = {

    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
        screenResolution: '1920x1080',
        //custom tags appearing as [object Object]
        //@see https://docs.saucelabs.com/dev/test-configuration-options/#custom-data
        "custom-data": {
            "release": "1.0",
            "commit": "0k392a9dkjr",
            "staging": true,
            "execution_number": 5,
            "server": "test.customer.com"
        }
    }
}
