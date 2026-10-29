Feature: Orders - Open Edit
  As a Posters Galore admin user
  I want to verify orders - open edit
  So that the module behaves correctly for automation

  @posters-galore @13-orders-open-edit
  Scenario: Clicking an order opens the edit view
    Given I open the orders list to edit an order
    When I click the first order row in the grid
    Then the order edit screen is displayed
