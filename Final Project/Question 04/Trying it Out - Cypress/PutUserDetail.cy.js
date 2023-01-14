describe('Final Project Question 4 - Trying It Out',() => {

    it("Update the users details", () => {
        var Newuser = {
            'name' : 'samuel',
            'email': 'samuel@rocketmail.com',
            'status' : 'active'
        }
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/331',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false,
            body : Newuser
            }).then((response) => {
                expect(response.body.name).equal(Newuser.name)
            expect(response.body.email).equal(Newuser.email)

            })
        })
    })