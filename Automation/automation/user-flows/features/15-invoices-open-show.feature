Feature: Invoices - Open Show
  As a Posters Galore admin user
  I want to verify invoices - open show
  So that the module behaves correctly for automation

  @posters-galore @15-invoices-open-show
  Scenario: Opening an invoice shows invoice details
    Given I open invoices to view a record
    When I open the first invoice from the list
    Then invoice detail content is displayed
