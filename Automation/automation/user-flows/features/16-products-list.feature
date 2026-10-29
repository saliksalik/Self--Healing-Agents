Feature: Products - List
  As a Posters Galore admin user
  I want to verify products - list
  So that the module behaves correctly for automation

  @posters-galore @16-products-list
  Scenario: Posters catalog list loads
    Given I open the posters catalog list
    Then the posters create action and catalog filters are visible
