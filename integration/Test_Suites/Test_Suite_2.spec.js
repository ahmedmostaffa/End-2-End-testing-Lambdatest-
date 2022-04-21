import 'cypress-xpath'
import 'cypress-axe'
const lighthousemetrics = {
    performance: 95,
    accessibility: 100,
    "best-practices": 95,
    seo: 85,
    pwa: 100,
  };
 

describe('Test Scenario 2',()=>{
    before('Samsung note 9 view ',() => {
        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.viewport('samsung-note9')
        cy.xpath("//*[contains(text(),'Input Form Submit')]").click()
        cy.wait(3000)
    })
    beforeEach('Samsung note 9 view',()=>{
        cy.viewport('samsung-note9')
    })
        
        it('verify accessibility for Samsung note 9 view',function() {
            cy.injectAxe()
            cy.checkA11y()
            //page title
                //shown in the window title bar in some browsers
                //shown in browsers' tabs when there are multiple web pages open
            //Image text alternatives 
                //
            // heading     
                // Web pages often have sections of information separated by visual headings, for example, heading text is bigger and bold 
                // (like "Headings" right above this sentence :-)
                    //**-The page has a heading. In almost all pages there should be at least one heading.
                    //**-All text that looks like a heading is marked up as a heading            
        })  //   
            
        it('verify the submission form',()=>{
            cy.get('input#name').type('john')
              .get("input[name='email']").type('am603311@gmail.com')
              .get("input[name='password']").type('12fahf8#FKm23')
              .xpath("//*[@id='company']").type('Upwork')
              .get('input#websitename').type("https://github.com/ahmedmostaffa")
              .get("select[name='country']").select('Egypt').should('have.value','EG')
              .get('input#inputCity').type('cairo')
              .get('input#inputAddress1').type('13 new cairo')
              .get('input#inputAddress2').type('13 old cairo')
              .get('input#inputState').type('new cairo')
              .get('input#inputZip').type('11772')
              .get('form#seleniumform').submit()
              .wait(4000)
              .xpath("//*[@class='success-msg hidden']").scrollIntoView().should('be.visible').contains('Thanks')

        })
        it('check the performance via lighthouse plugin',()=>{
            cy.lighthouse(lighthousemetrics)
        })
        

})
