describe('Final Project Question 4 - Nested Resources',() => {

    it('Get a user posts',() =>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/334/posts',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false
        }).as('assert')
        cy.get('@assert').its('body[0].id').should('equal',13406)
        cy.get('@assert').its('body[0].title').should('equal','pertemuan 2 kota')
        cy.get('@assert').its('body[0].body').should('equal','Jakarta & Balikpapan')
    })
})