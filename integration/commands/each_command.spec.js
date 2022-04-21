
const elements=['first one','second one','third one'];

it('each command of list',()=>{
    cy.wrap(elements).should('have.length',3).each((ele,index)=>{
        expect(ele).to.contain(elements[index])
    })
})