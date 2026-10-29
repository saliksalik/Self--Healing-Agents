Feature: Reviews - List
  As a Posters Galore admin user
  I want to verify reviews - list
  So that the module behaves correctly for automation

  @posters-galore @29-reviews-list
  Scenario: Reviews list page loads with rows
    Given I open the reviews module list
    Then review rows are visible in the reviews table
