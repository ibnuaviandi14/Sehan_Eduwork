describe('Final Project Question 4 - Trying It Out',() => {

    it("Delete User Details", () => {
    
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/331',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false,
            }).then((response) => {
            expect(response.status).equal(204)

            })
        })
    })