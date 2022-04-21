
const obj={
    'name':'joo',
    'age':'25', 
    'job':function(){
        return 'I love coding and automation'
    }

};

it('invoke command ',()=>{
    cy.wrap(obj).should('have.a.property','name')
    cy.wrap(obj).invoke('job').should('eq','I love coding and automation')
    
});

