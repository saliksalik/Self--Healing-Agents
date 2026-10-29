Feature: Navigation - Posters Menu
  As a Posters Galore admin user
  I want to verify navigation - posters menu
  So that the module behaves correctly for automation

  @posters-galore @34-nav-posters-menu
  Scenario: Sidebar Posters link opens catalog
    Given I am on the dashboard before using posters menu
    When I click the Posters sidebar link
    Then the posters catalog opens from the sidebar
