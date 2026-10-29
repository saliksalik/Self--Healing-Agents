Feature: Navigation - Orders Menu
  As a Posters Galore admin user
  I want to verify navigation - orders menu
  So that the module behaves correctly for automation

  @posters-galore @33-nav-orders-menu
  Scenario: Sidebar Orders link opens orders module
    Given I am on the dashboard before using orders menu
    When I click the Orders sidebar link
    Then the orders module opens from the sidebar
