describe('Final Project Question 4 - Nested Resources',() => {

    it('Creates a user post',() =>{
        
        var users = {
            "title": "pertemuan 2 kota",
            "body": "Jakarta & Balikpapan",
            }
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/334/posts',
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97'
            },
            failOnStatusCode : false,
            body : users
            }).then((response) => {    
            expect(response.body.title).equal(users.title)
            expect(response.body.body).equal(users.body)
        })
    })
})
