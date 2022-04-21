
// mocha
import 'cypress-xpath'

describe ('Test Suite 1',function(){
    it('verify the title of page',function(){
        //steps
        cy.visit("https://play.google.com/store")
        cy.title().should('eq','Google Play')
        
    })
    it('verify the title of apps page',function(){
        //steps
        cy.xpath("(//a[@jsname='UOtaxb' or @class='mzRh0d'])[2]").click()
        cy.title().should('eq','Android Apps on Google Play')
    })
    it('verify the title of Education page',function(){
        //steps
        cy.get("button.qAAUy",{timeout:20000}).should('be.visible').click() //explicit wait
        cy.wait(5000)
        cy.xpath("//*[contains(text(),'Educational')]").click()
        cy.title().should('eq','Educational - Android Apps on Google Play')

    })
    it('verify the title of TED page',function(){
        //steps
        cy.xpath("//input[@class='gbqfif']").type("TED") //search bar
        cy.get(".gbqfb").click()  //search button
        cy.wait(5000)
        cy.xpath("(//a[@href='/store/apps/details?id=com.ted.android'])[1]")
        cy.title().should('eq','TED - Android Apps on Google Play')

    })
    
    it('Scroll down to Scary Movies', function() {
        cy.go(-1)
        cy.xpath("//*[@class='gb_he gb_sc gb_fe']").click()
        cy.wait(5000)
        cy.get("(//*[@jsname='UOtaxb' or @class='mzRh0d'])[3]").click()
        cy.wait(5000)
        cy.url().should('include', '/store/movies')
        cy.title().should('have.text', 'Movies on Google Play')
        cy.scrollTo(249,146)
      })

})


