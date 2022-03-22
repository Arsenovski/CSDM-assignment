/// <reference types="cypress" />

describe("01. [UI] DemoQa Store", () => {
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

  describe("[01a] UI DemoQA - Book Store flows", () => {
    it("[1a.1] Add a book to the collection", function() {
      const fx = require("../../fixtures/demoQa_book_store");
      cy.verify_search_bar_exists();
      cy.navigate_to_store();
      cy.search_a_book(fx.bookName);
      cy.contains("Speaking").click();
      cy.add_book_to_collection();
    });
  });
});
