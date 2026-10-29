Feature: Segments - Link Customers
  As a Posters Galore admin user
  I want to verify segments - link customers
  So that the module behaves correctly for automation

  @posters-galore @28-segments-link-customers
  Scenario: Segment page links through to filtered customers
    Given I open segments before following a customer link
    When I follow a segment link to customers
    Then I land on the customers module from segments
