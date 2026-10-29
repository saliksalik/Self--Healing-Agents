Feature: Orders - Ordered Tab
  As a Posters Galore admin user
  I want to verify orders - ordered tab
  So that the module behaves correctly for automation

  @posters-galore @09-orders-ordered-tab
  Scenario: Orders page opens on Ordered tab
    Given I open the orders module for the ordered tab check
    Then the Ordered status tab is selected on orders
