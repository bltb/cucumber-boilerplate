Feature: Facebook test
    As a Developer in Test
    I want to open the Facebook social network page
    So that I can ???

Scenario: open URL
    Given I open the url "https://www.facebook.com/"
    Then  I expect the url to contain "facebook.com"
    And   I expect that the title is "Facebook – log in or sign up"
    And   I expect that the title  contains "Facebook"

