describe('Final Project Question 4 - Trying It Out',() => {

    it("Verify the users list will display", () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/331'
        }).as('users')
        cy.get('@users').its('body.id').should('equal',331)
        cy.get('@users').its('body.name').should('equal','Sloka Menon')
        cy.get('@users').its('body.email').should('equal','menon_sloka@torp.net')
    })
})