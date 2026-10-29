Feature: Invoices - List
  As a Posters Galore admin user
  I want to verify invoices - list
  So that the module behaves correctly for automation

  @posters-galore @14-invoices-list
  Scenario: Invoices list page loads with table
    Given I open the invoices module list
    Then invoice rows are visible in the invoices table
