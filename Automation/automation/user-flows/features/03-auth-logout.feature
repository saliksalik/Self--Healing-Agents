Feature: Auth - Logout
  As a Posters Galore admin user
  I want to verify auth - logout
  So that the module behaves correctly for automation

  @posters-galore @03-auth-logout
  Scenario: Logged in user can sign out back to login
    Given I am signed into Posters Galore before logout
    When I open the user menu and choose logout
    Then I am returned to the Posters Galore login page
