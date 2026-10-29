Feature: Customers - Create Form
  As a Posters Galore admin user
  I want to verify customers - create form
  So that the module behaves correctly for automation

  @posters-galore @24-customers-create-form
  Scenario: Create customer form opens from the list
    Given I open customers before creating a record
    When I open the create customer form
    Then customer create fields are displayed
