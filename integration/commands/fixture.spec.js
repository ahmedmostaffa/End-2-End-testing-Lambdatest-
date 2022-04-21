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
        cy.fixture('form').as('form_data')
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
            
        it.only('verify the submission form',()=>{
            cy.get('@form_data').then((data)=>{
                
            cy.get('input#name').type(data.name)
              .get("input[name='email']").type(data.email)
              .get("input[name='password']").type(data.password)
              .xpath("//*[@id='company']").type(data.job)
              .get('input#websitename').type(data.url)
              .get("select[name='country']").select('Egypt').should('have.value','EG')
              .get('input#inputCity').type(data.city)
              .get('input#inputAddress1').type(data.address1)
              .get('input#inputAddress2').type(data.address2)
              .get('input#inputState').type(data.state)
              .get('input#inputZip').type(data.postalcode)
              .get('form#seleniumform').submit()
              .wait(4000)
              .get('p.success-msg.hidden').scrollIntoView().then((el)=>{

                expect(el).to.have.text('Thanks for contacting us, we will get back to you shortly.')

            })

              })

        })
        it('check the performance via lighthouse plugin',()=>{
            cy.lighthouse(lighthousemetrics)
            
        })
        

})
