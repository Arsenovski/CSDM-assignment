/// <reference types="cypress" />

describe("01. [UI] DemoQa Login", () => {
  before(() => {
    cy.exec("npm cache clear --force");
  });
  beforeEach(() => {
    cy.demoQa_start();
  });

  describe("[01a] UI DemoQA - Login Form", () => {
    it("[1a.1] Verify valid login and logout", function() {
      const fx = require("../../fixtures/demoQa_login_form");
      cy.fill_out_credentials(fx.validCredentials);
      cy.log_in();
      cy.demoQa_check_route(fx.routes.login);
      cy.log_out();
      cy.demoQa_check_route(fx.routes.books);
    });

    it("[1a.2] Verify invalid login", function() {
      const fx = require("../../fixtures/demoQa_login_form");
      cy.navigate_to_login_page();
      cy.demoQa_check_route(fx.routes.login);
      cy.fill_out_credentials(fx.invalidCredentials);
      cy.log_in();
      cy.demoQa_check_route(fx.routes.login);
      cy.contains("Invalid username or password!");
    });
  });
});
