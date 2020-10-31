describe('Open Quilgo.com', () => {
	it('Open main page', () => {
		cy.visit('/')

		// assert url
		cy.url().should('eq', Cypress.config('baseUrl'))

		// take screenshot
		cy.screenshot()
	})

})