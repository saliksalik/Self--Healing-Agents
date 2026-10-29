Feature: Navigation - Customers Menu
  As a Posters Galore admin user
  I want to verify navigation - customers menu
  So that the module behaves correctly for automation

  @posters-galore @35-nav-customers-menu
  Scenario: Sidebar Customers link opens customers module
    Given I am on the dashboard before using customers menu
    When I click the Customers sidebar link
    Then the customers module opens from the sidebar
