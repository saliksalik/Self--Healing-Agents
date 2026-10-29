Feature: Reviews - Reject Button
  As a Posters Galore admin user
  I want to verify reviews - reject button
  So that the module behaves correctly for automation

  @posters-galore @31-reviews-reject-button
  Scenario: Reject action is available on reviews
    Given I open reviews to inspect the reject action
    Then a Reject button is visible on the reviews page
