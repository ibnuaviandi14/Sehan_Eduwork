// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Demo',() =>{
    cy.visit('https://demo.midtrans.com/') // visit the website
    cy.get('.title').should('contain','Midtrans Pillow') // assertion the mainpage
    cy.get('.buy').click() // click the BUY NOW button
    cy.get('[data-reactid=".0.0.1.0.0.0"]').should('contain','Shopping Cart') // assertion the Shopping Chart
    cy.get('[data-reactid=".0.0.1.0.2"]').should('contain','Customer Details') // assertion the Customer Details
    cy.get('[data-reactid=".0.0.1.1.1.0"]').click() // Change the view feature
    cy.get('[data-reactid=".0.0.1.2.1.0.3.1.1"]').click() // Click the Details
    cy.get('[data-reactid=".0.0.1.2.1.0.5.1.1.3.1"]').click() // Click the Details// Change the UI Method into Redirection
    cy.get('.btn-primary').click()
})