const AppScreen = require( './app.screen');

const SELECTORS = {
    HOME_SCREEN: '~Home-screen'
};

class HomeScreen extends AppScreen {
    constructor() {
        super(SELECTORS.HOME_SCREEN);
    }
}

module.exports = new HomeScreen();
