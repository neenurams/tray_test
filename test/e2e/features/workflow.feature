Feature: Create and Delete Workflow

  Scenario: As a user, I should be able to create and delete workflow
    Given I successfully logged in to tray.io
    When I create a new workflow
    Then I go back to dashboard
    And I delete the previously created Workflow
    Then I log out of tray.io