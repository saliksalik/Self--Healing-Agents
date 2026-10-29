Feature: Dashboard - Pending Reviews
  As a Posters Galore admin user
  I want to verify dashboard - pending reviews
  So that the module behaves correctly for automation

  @posters-galore @08-dashboard-pending-reviews
  Scenario: Dashboard shows Pending Reviews section
    Given I open the dashboard to inspect pending reviews
    Then the Pending Reviews section is visible on the dashboard
