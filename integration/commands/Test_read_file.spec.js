
describe (' Test file ',function(){

    before('verify the title of page',() => {
        //steps
        cy.readFile('cypress\fixtures\example.json').should('have.a.property','email')
    })
    
})