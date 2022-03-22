
Feature: Register form

    Scenario: Successful registration of a user
        Given I am on a login page
        And I click on "New User" button
        And I provide valid credentials and submit ReCaptcha field
        When I click on "Register" button
        Then verify popup is shown with text "User Register Successfully."

Feature: Login form

    Scenario: Successful login
        Given I am on a login page
        And I provide valid credentials
        When I click on "Login" button
        Then verify user is logged in and Profile page is shown

    Scenario: Successful logout
        Given I am on a profile page
        When I click on "Logout" button
        Then verify user is logged out and Login page is shown

    Scenario: Unsuccessful login wnvalid credentials
        Given I am on a login page
        And I provide invalid credentials
        When I click on "Login" button
        Then verify user is not logged in and a message is shown for invalid credentials

Feature: Book store form

    Scenario: Successful adding a book to the collection
        Given I am on profile page and already logged in
        And I navigate to book store
        And I search for a book and click on it
        When I click on "Add to your collection" button
        Then verify book is added to the collection

Feature: Profile form

    Scenario: Deleting all books from a collection
        Given I am on profile page
        And I click on "Delete All Books" button
        When I confirm and click on OK on popup asking my collection of books to be deleted
        Then I all books should be deleted from my collection

    Scenario: Deleting user account
        Given I am on profile page
        And I click on "Delete Account" button
        When I confirm and click on OK on popup asking my account to be deleted
        Then I should be redirected to Login page