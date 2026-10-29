Feature: Customers - Open Edit
  As a Posters Galore admin user
  I want to verify customers - open edit
  So that the module behaves correctly for automation

  @posters-galore @25-customers-open-edit
  Scenario: Opening a customer shows the edit form
    Given I open customers to edit a record
    When I open the first customer row
    Then the customer edit form is displayed
