Feature: Auth - Valid Login
  As a Posters Galore admin user
  I want to verify auth - valid login
  So that the module behaves correctly for automation

  @posters-galore @02-auth-valid-login
  Scenario: User signs in with demo credentials and reaches dashboard
    When I sign in to Posters Galore using demo credentials
    Then the Posters Galore dashboard welcome message is displayed
