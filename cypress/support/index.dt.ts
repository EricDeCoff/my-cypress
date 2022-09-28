declare namespace Cypress {
    interface Chainable<Subject> {
        highlight(ele:string): Chainable <any>
        unhighlight(ele:string): Chainable <any>
    }
}