Feature: Reviews - Open Edit
  As a Posters Galore admin user
  I want to verify reviews - open edit
  So that the module behaves correctly for automation

  @posters-galore @32-reviews-open-edit
  Scenario: Opening a review shows the edit drawer or form
    Given I open reviews to edit a record
    When I open the first review row
    Then the review editor content is displayed
