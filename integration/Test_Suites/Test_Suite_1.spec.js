import 'cypress-xpath'

describe ('Test Scenario 1',function(){

    before('verify the title of page',() => {
        //steps
        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.url().should('include', '/selenium-playground/')
        cy.xpath("//*[contains(text(),'Drag & Drop Sliders')]").scrollIntoView().should('be.visible').click()
        cy.wait(5000)
    })
    it('verify slider bar for input Type',() => {
        cy.get('output#rangeSuccess').scrollIntoView().should('be.visible')
        cy.xpath('//*[@id="slider3"]/div/input').invoke('val','95').trigger('change')
        cy.get('#rangeSuccess').invoke('text','95').trigger('change').should('have.text','95')
    })
})

