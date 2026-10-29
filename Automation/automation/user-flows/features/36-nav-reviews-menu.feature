Feature: Navigation - Reviews Menu
  As a Posters Galore admin user
  I want to verify navigation - reviews menu
  So that the module behaves correctly for automation

  @posters-galore @36-nav-reviews-menu
  Scenario: Sidebar Reviews link opens reviews module
    Given I am on the dashboard before using reviews menu
    When I click the Reviews sidebar link
    Then the reviews module opens from the sidebar
