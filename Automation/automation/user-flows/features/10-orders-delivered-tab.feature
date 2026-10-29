Feature: Orders - Delivered Tab
  As a Posters Galore admin user
  I want to verify orders - delivered tab
  So that the module behaves correctly for automation

  @posters-galore @10-orders-delivered-tab
  Scenario: User can switch to Delivered orders tab
    Given I open orders before switching to delivered
    When I select the Delivered orders tab
    Then the Delivered orders tab is selected
