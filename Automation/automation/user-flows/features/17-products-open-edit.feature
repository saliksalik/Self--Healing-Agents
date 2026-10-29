Feature: Products - Open Edit
  As a Posters Galore admin user
  I want to verify products - open edit
  So that the module behaves correctly for automation

  @posters-galore @17-products-open-edit
  Scenario: Opening a poster opens the edit form
    Given I open posters before editing a product
    When I open the first poster from the catalog
    Then the poster edit form with tabs is displayed
