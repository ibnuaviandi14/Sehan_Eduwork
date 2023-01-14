describe('Final Project Question 4 - Trying It Out',() => {

    it('Adding New User Details',() =>{
        
        var users = {
            "name": "ardi",
            "email": "ardi@yahoo.com",
            "gender": "male",
            "status": "active"
            }
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false,
            body : users
            }).then((response) => {
            expect(response.body.email).equal(users.email)
        })

})
})

