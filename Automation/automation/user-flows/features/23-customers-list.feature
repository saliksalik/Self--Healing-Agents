Feature: Customers - List
  As a Posters Galore admin user
  I want to verify customers - list
  So that the module behaves correctly for automation

  @posters-galore @23-customers-list
  Scenario: Customers list page loads with rows
    Given I open the customers module list
    Then customer rows are visible in the customers table
