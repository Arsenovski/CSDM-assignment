/// <reference types="cypress" />

describe("01. [UI] DemoQa Profile", () => {
  before(() => {
    cy.exec("npm cache clear --force");
  });
  beforeEach(() => {
    cy.demoQa_start();
    const fx = require("../../fixtures/demoQa_login_form");
    cy.fill_out_credentials(fx.validCredentials);
    cy.log_in();
    cy.demoQa_check_route(fx.routes.login);
  });
  describe("[01a] UI DemoQA - Profile flows", () => {
    it("[1a.1] Delete All Books", function() {
      cy.delete_all_books();
    });

    it("[1a.2] Delete a profile", function() {
      cy.delete_account();
    });
  });
});
