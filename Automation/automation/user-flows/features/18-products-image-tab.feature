Feature: Products - Image Tab
  As a Posters Galore admin user
  I want to verify products - image tab
  So that the module behaves correctly for automation

  @posters-galore @18-products-image-tab
  Scenario: Poster edit Image tab is available
    Given I open a poster edit form for the image tab
    When I select the Image tab on the poster form
    Then the poster image field is visible
