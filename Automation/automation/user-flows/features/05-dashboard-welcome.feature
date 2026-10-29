Feature: Dashboard - Welcome
  As a Posters Galore admin user
  I want to verify dashboard - welcome
  So that the module behaves correctly for automation

  @posters-galore @05-dashboard-welcome
  Scenario: Dashboard shows welcome panel after login
    Given I open the Posters Galore dashboard for welcome check
    Then the dashboard welcome panel is visible
