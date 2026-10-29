Feature: Auth - Unauthenticated Redirect
  As a Posters Galore admin user
  I want to verify auth - unauthenticated redirect
  So that the module behaves correctly for automation

  @posters-galore @04-auth-unauth-redirect
  Scenario: Visiting orders while logged out redirects to login
    When I open the orders route without an authenticated session
    Then Posters Galore forces the login page for protected orders
