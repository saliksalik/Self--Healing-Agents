Feature: Dashboard - Monthly Revenue
  As a Posters Galore admin user
  I want to verify dashboard - monthly revenue
  So that the module behaves correctly for automation

  @posters-galore @06-dashboard-monthly-revenue
  Scenario: Dashboard shows Monthly Revenue card
    Given I open the dashboard to inspect monthly revenue
    Then the Monthly Revenue card is visible on the dashboard
