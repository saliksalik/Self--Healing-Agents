Feature: Reviews - Accept Button
  As a Posters Galore admin user
  I want to verify reviews - accept button
  So that the module behaves correctly for automation

  @posters-galore @30-reviews-accept-button
  Scenario: Accept action is available on reviews
    Given I open reviews to inspect the accept action
    Then an Accept button is visible on the reviews page
