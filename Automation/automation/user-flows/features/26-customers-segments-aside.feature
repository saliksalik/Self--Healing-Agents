Feature: Customers - Segments Aside
  As a Posters Galore admin user
  I want to verify customers - segments aside
  So that the module behaves correctly for automation

  @posters-galore @26-customers-segments-aside
  Scenario: Customers page shows segment filters aside
    Given I open customers to inspect the segments aside
    Then customer segment filters are visible beside the list
