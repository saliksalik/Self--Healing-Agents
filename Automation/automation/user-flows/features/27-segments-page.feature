Feature: Segments - Page
  As a Posters Galore admin user
  I want to verify segments - page
  So that the module behaves correctly for automation

  @posters-galore @27-segments-page
  Scenario: Segments page loads with segment names
    Given I open the segments module page
    Then known customer segments are listed
