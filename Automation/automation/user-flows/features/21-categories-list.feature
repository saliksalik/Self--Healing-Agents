Feature: Categories - List
  As a Posters Galore admin user
  I want to verify categories - list
  So that the module behaves correctly for automation

  @posters-galore @21-categories-list
  Scenario: Categories list page loads
    Given I open the categories module list
    Then category records are visible in the list
