///<reference types = "cypress" />

describe("Final Project No. 3 - Visit the website demo-midtrans",() =>{    

    beforeEach('Start the application',() =>{
        cy.Demo()
    
    }) 

    it('Paying with Credit/Debit Card - incorrect card number',() =>{
        cy.get('[alt="VISA"]').click()
        cy.get('.card-number-input-container > .valid-input-value').type('4911111111123123')
        cy.get('#card-expiry').type('0125')
        cy.get('#card-cvv').type('123')
        cy.get(':nth-child(6) > .asphalt-theme-a6420f20 > .radioWrap__4CVR5 > .RadioLabel__YNJEG > span').click()
        cy.get('.btn').click()
        cy.get('.card-warning').should('contain','Make sure your card number are correct.')
        });
        

    it('Paying with Credit/Debit Card - correct card number',() =>{
        cy.get('[alt="VISA"]').click()
        cy.get('.card-number-input-container > .valid-input-value').type('4811111111111114')
        cy.get('#card-expiry').type('0125')
        cy.get('#card-cvv').type('123')
        cy.get(':nth-child(6) > .asphalt-theme-a6420f20 > .radioWrap__4CVR5 > .RadioLabel__YNJEG > span').click()
        cy.get('.btn').click()
        cy.url().should('contain','credit-card')
        });

    it('Paying with bank Transfer',() =>{
        cy.get(':nth-child(8) > [data-testid="list-item"] > .list-content > .list-title')
        .should('contain','Bank transfer').click()
        cy.get('.page-title').should('contain','Bank transfer')
        cy.get('[href="#/bank-transfer/bca-va"] > .payment-page-text').click()
        cy.get('.payment-page-main-instruction')
        .should('contain','Complete payment from BCA to the virtual account number below.')
        cy.get('.payment-page > :nth-child(1) > :nth-child(3) > :nth-child(1)')
        .should('contain','Virtual account number')
        cy.get('.pay-instruction-text').click()
        cy.get(':nth-child(5) > .collapse-button').should('contain','m-BCA').click()
        cy.get(':nth-child(5) > .content > .numbered-list-point > :nth-child(1) > div')
        .should('contain','Select m-Transfer.')
        cy.get(':nth-child(5) > .content > .numbered-list-point > :nth-child(2) > div')
        .should('contain','Select BCA virtual account.')
        cy.get(':nth-child(5) > .content > .numbered-list-point > :nth-child(3) > div')
        .should('contain','Insert BCA virtual account number.')
        cy.get(':nth-child(5) > .content > .numbered-list-point > :nth-child(4) > div')
        .should('contain','Insert the payable amount, then confirm.')
        cy.get(':nth-child(5) > .content > .numbered-list-point > :nth-child(5) > div')
        .should('contain','Payment complete.')
        });

    it('Paying with GoPay/other e-Wallets',() =>{
        cy.get(':nth-child(10) > [data-testid="list-item"] > .list-content > .list-title')
        .should('contain','GoPay').click()
        cy.get('.page-title').should('contain','GoPay')
        cy.get('.qr-image').should('have.attr','alt')
        cy.get('.pay-instruction-text').click()
        cy.get('.numbered-list-point > :nth-child(1) > div')
        .should('contain','Open your Gojek or other e-wallet app.')
        cy.get('.numbered-list-point > :nth-child(2) > div')
        .should('contain','Scan the QR code on your monitor.')
        cy.get('.numbered-list-point > :nth-child(3) > div')
        .should('contain','Confirm payment in the app.')
        cy.get('.numbered-list-point > :nth-child(4) > div')
        .should('contain','Payment complete.')
        });

    it('Paying with Shopee/other e-Wallets',() =>{
            
        cy.get(':nth-child(15) > [data-testid="list-item"] > .list-content > .list-title')
        .should('contain','ShopeePay').click()
        cy.get('.page-title').should('contain','ShopeePay')
        cy.get('.qr-image').should('have.attr','alt')
        cy.get('.pay-instruction-text').click()
        cy.get('.numbered-list-point > :nth-child(1) > div')
        .should('contain','Open your Shopee or other e-wallet app.')
        cy.get('.numbered-list-point > :nth-child(2) > div')
        .should('contain','Scan the QR code on your monitor.')
        cy.get('.numbered-list-point > :nth-child(3) > div')
        .should('contain','Confirm payment in the app.')
        cy.get('.numbered-list-point > :nth-child(4) > div')
        .should('contain','Payment complete.')
        });

    it('Paying with Indomaret',() =>{
        cy.get(':nth-child(9) > [data-testid="list-item"] > .list-content > .list-title')
        .should('contain','Indomaret').click()
        cy.get('.page-title').should('contain','Indomaret')
        cy.get('.page-container > :nth-child(2)')
        .should('contain','Show barcode to the cashier or enter payment code on i.saku app.')
        cy.get('.cstore-barcode').should('have.attr','alt')
        cy.get('.pay-instruction-text').click()
        cy.get('.numbered-list-point > :nth-child(1) > div')
        .should('contain','Tap Download payment info to get a copy of your unique payment details.')
        cy.get('.numbered-list-point > :nth-child(2) > div')
        .should('contain',"If you’re going to pay on the counter")
        cy.get('.numbered-list-point > :nth-child(3) > div')
        .should('contain','The cashier will confirm your transaction details. Once your transaction is successful, you’ll receive the payment confirmation e-mail.')
        cy.get('.numbered-list-point > :nth-child(4) > div')
        .should('contain','If you’re going to pay via i.saku, open the app and tap Bayar.')
        cy.get('.numbered-list-point > :nth-child(5) > div')
        .should('contain','Choose the merchant you’d like to pay to, and enter your payment code.')
        cy.get('.numbered-list-point > :nth-child(6) > div')
        .should('contain','Tap Selanjutnya and check your transaction details.')
        cy.get('.numbered-list-point > :nth-child(7) > div')
        .should('contain','Tap Bayar sekarang to confirm your payment.')
        cy.get('.numbered-list-point > :nth-child(8) > div')
        .should('contain','Please keep your Indomaret payment receipt in case you’ll need further help via support.')
        });


})