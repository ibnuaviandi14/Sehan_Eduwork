describe('Final Project Question 4 - Nested Resources',() => {

    it('Get a user posts',() =>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/334/todos',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false
        }).as('assert')
        cy.get('@assert').its('body[0].id').should('equal',10199)
        cy.get('@assert').its('body[0].title').should('equal','Cinta Bersemi Kembali')
        cy.get('@assert').its('body[0].due_on').should('equal','2012-12-12T00:00:00.000+05:30')
        cy.get('@assert').its('body[0].status').should('equal','completed')
    })
})