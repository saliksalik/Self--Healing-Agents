Feature: Dashboard - New Orders
  As a Posters Galore admin user
  I want to verify dashboard - new orders
  So that the module behaves correctly for automation

  @posters-galore @07-dashboard-new-orders
  Scenario: Dashboard shows New Orders card
    Given I open the dashboard to inspect new orders
    Then the New Orders card is visible on the dashboard
