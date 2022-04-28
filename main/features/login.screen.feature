Feature: Native Demo App

  Scenario: As a user, I can log into the home screen
    Given I am on the login page
    When I log in with "test@webdriver.io" and "Test1234!"
    Then I should be on the home screen
