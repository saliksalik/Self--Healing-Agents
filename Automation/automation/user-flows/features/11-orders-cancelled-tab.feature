Feature: Orders - Cancelled Tab
  As a Posters Galore admin user
  I want to verify orders - cancelled tab
  So that the module behaves correctly for automation

  @posters-galore @11-orders-cancelled-tab
  Scenario: User can switch to Cancelled orders tab
    Given I open orders before switching to cancelled
    When I select the Cancelled orders tab
    Then the Cancelled orders tab is selected
