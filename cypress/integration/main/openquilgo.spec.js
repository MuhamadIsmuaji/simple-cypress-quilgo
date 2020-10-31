describe('Open Quilgo.com', () => {
	it('Open main page', () => {
		cy.visit('/')
			.screenshot()

		cy.url().should('include', 'quilgo.com')
	})

})