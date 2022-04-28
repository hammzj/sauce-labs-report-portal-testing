const {Given, When, Then} = require('@wdio/cucumber-framework');
const LoginScreen = require('../screenobjects/login.screen');
const HomeScreen = require('../screenobjects/home.screen');

Given('I am on the login page',
    async function () {
        await LoginScreen.waitForIsShown();
    })

When('I log in with {string} and {string}',
    async function (username, password) {
        await LoginScreen.loginContainerButton.click();
        await LoginScreen.email.setValue(username);
        await LoginScreen.password.setValue(password);

        if ((await driver.isKeyboardShown())) {
            await driver.hideKeyboard();
        }
        await LoginScreen.loginButton.click();
        await LoginScreen.alert.waitForIsShown();
        await expect(LoginScreen.alert.text()).toEqual('Success\nYou are logged in!');

        await LoginScreen.alert.pressButton('OK');
        await LoginScreen.alert.waitForIsShown(false);
    })

Then('I should be on the home screen', async function () {
    await HomeScreen.waitForIsShown();
})
