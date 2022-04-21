

it('verify the title of page',() => {
    //steps
    const player={
        name:'ronaldo',
        age:43,
        goals:150,
        job:function(){
            return (this.name +" "+'is playing football')
        }
    }
    cy.wrap(player)
    .should('have.property','name','ronaldo')
    cy.wrap(player).invoke('job').should('eq','ronaldo is playing football')
    
})
    
