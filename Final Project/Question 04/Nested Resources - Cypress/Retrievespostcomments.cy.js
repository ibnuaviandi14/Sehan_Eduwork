describe('Final Project Question 4 - Nested Resources',() => {

    it('Get a user posts',() =>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/posts/334/comments',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false
        }).as('assert')
        cy.get('@assert').its('body[0].id').should('equal',11192)
        cy.get('@assert').its('body[0].name').should('equal','Ibnu Aviandi')
        cy.get('@assert').its('body[0].email').should('equal','ibnuaviandi@google.com')
    })
})