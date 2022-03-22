/// <reference types="cypress" />
"use strict";
/*****************************************************************************
 * Initialize Helper & Routing functions, Declare Environment Variables
 *****************************************************************************/
const selectors = require("../fixtures/selectors.json");

const base_url = Cypress.env("demoQaUrl");
//const tmdb_url = Cypress.env("tmdbUrl");

/******************************************************************************
 * BYNDER - LOGIN - Custom Commands
 *****************************************************************************/

Cypress.Commands.add("demoQa_start", () => {
  // Clear session storage before visit
  const options = {
    onBeforeLoad: win => {
      win.sessionStorage.clear();
    }
  };

  // Clear cookies and session storage and visit home page.
  cy.clearCookies();
  cy.clearLocalStorage();

  // Navigate to DemoQa url
  cy.visit(`${base_url}`, options);
});

Cypress.Commands.add("verify_search_bar_exists", () => {
  // Verify search bar is present with its placeholder
  cy.get(selectors["searchBox"])
    .invoke("attr", "placeholder")
    .should("contain", "Type to search");
});

Cypress.Commands.add("search_a_book", bookValue => {
  // Fill out book value
  cy.get(selectors["searchBox"]).type(bookValue);
});

Cypress.Commands.add("navigate_to_login_page", () => {
  // Click on Login button
  cy.get(selectors["loginBtn"]).click();
});

Cypress.Commands.add("navigate_to_register_page", () => {
  // Click on New User button
  cy.get(selectors["newUserBton"]).click();
});

Cypress.Commands.add("fill_out_credentials", credentials => {
  // Fill out username
  cy.get(selectors["username"]).type(credentials.userName);

  // Fill out password
  cy.get(selectors["password"]).type(credentials.password);
});

Cypress.Commands.add("log_in", () => {
  // Click the 'Login' button
  cy.get(selectors["loginBtn"])
    .should("contain", "Login")
    .click();
  // Assert user is logged in
  cy.contains("Profile");
});

Cypress.Commands.add("log_out", () => {
  // Click the 'Log Out' button
  cy.get(selectors["logoutButton"]).click();
  // Assert Login page is shown
  cy.contains("Login");
});

Cypress.Commands.add("fill_out_registration_info", registration_info => {
  // Fill out first name
  cy.get(selectors["firstName"]).type(registration_info.firstName);
  // Fill out last name
  cy.get(selectors["lastName"]).type(registration_info.lastName);
  // Fill out username
  cy.get(selectors["username"]).type(registration_info.username);
  // Fill out password
  cy.get(selectors["password"]).type(registration_info.password);
});

Cypress.Commands.add("demoQa_check_route", expectedRoute => {
  // Check if navigating to specific url
  cy.url().should($url => {
    return $url.includes(expectedRoute);
  });
});

Cypress.Commands.add("delete_all_books", () => {
  // Click the 'Delete All Books' button
  cy.contains("Delete All Books").click({ force: true });
  // Click the OK button on popup to confirm deleting all books
  cy.get("#closeSmallModal-ok").click({ force: true });
});

Cypress.Commands.add("delete_account", () => {
  // Click the 'Delete Account' button
  cy.contains("Delete Account").click({ force: true });
  // Click the OK button on popup to confirm deleting account
  cy.get("#closeSmallModal-ok").click({ force: true });
});

Cypress.Commands.add("navigate_to_store", () => {
  // Click the 'Book Store' button
  cy.get(selectors["bookStore"]).click({ force: true });
});
Cypress.Commands.add("add_book_to_collection", () => {
  // Click the 'Book Store' button
  cy.contains("Add To Your Collection").click({ force: true });
});
