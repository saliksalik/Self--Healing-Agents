Feature: Products - Details Tab
  As a Posters Galore admin user
  I want to verify products - details tab
  So that the module behaves correctly for automation

  @posters-galore @19-products-details-tab
  Scenario: Poster edit Details tab is available
    Given I open a poster edit form for the details tab
    When I select the Details tab on the poster form
    Then poster detail fields are visible
