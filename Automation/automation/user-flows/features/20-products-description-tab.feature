Feature: Products - Description Tab
  As a Posters Galore admin user
  I want to verify products - description tab
  So that the module behaves correctly for automation

  @posters-galore @20-products-description-tab
  Scenario: Poster edit Description tab is available
    Given I open a poster edit form for the description tab
    When I select the Description tab on the poster form
    Then the poster description editor is visible
