const {DEFAULT_TIMEOUT} = require('../constants');
module.exports = class AppScreen {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     * @return {boolean}
     */
    waitForIsShown(isShown = true) {
        return $(this.selector).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }
}
