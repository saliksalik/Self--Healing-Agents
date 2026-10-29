Feature: Auth - Login Page Loads
  As a Posters Galore admin user
  I want to verify auth - login page loads
  So that the module behaves correctly for automation

  @posters-galore @01-auth-login-page-loads
  Scenario: Login page shows username and password fields
    Given I open the Posters Galore login screen for page load check
    Then the login username password and sign in controls are visible
