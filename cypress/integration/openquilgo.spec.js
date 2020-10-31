describe('Open Quilgo.com and try to Login', () => {
	it('Open main page', () => {
		cy.visit('/')
			.screenshot()
		
		cy.url().should('include', 'quilgo.com')
	})
	
})