describe('Final Project Question 4 - Nested Resources',() => {

    it('Creates a user post',() =>{
        
        var users = {
            "name": "Ibnu Aviandi",
            "email": "ibnuaviandi@google.com",
            "body": "Pertemuan yang mengubah hidup"
            }
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/posts/334/comments',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false,
            body : users
            }).then((response) => {
            expect(response.body.name).equal(users.name)
            expect(response.body.email).equal(users.email)
            expect(response.body.body).equal(users.body)
        })
    })
})
