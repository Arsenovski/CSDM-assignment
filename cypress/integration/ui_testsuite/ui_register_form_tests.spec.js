/// <reference types="cypress" />

//In order for the tests to be complete, the user needs to verify RECAPTCHA field and press the Send button.

describe("01. [UI] DemoQa Register", () => {
  before(() => {
    cy.exec("npm cache clear --force");
  });
  beforeEach(() => {
    cy.demoQa_start();
  });

  describe("[01a] UI DemoQA - Registration Form", () => {
    it("[1a.1] Register a user", function() {
      const fx = require("../../fixtures/demoQa_registration_form");
      cy.navigate_to_login_page();
      cy.navigate_to_register_page();
      cy.demoQa_check_route(fx.routes.register);
      cy.fill_out_registration_info(fx.validRegistrationInfo);
    });
  });
});
