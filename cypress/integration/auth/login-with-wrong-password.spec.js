describe('Open Quilgo.com and try login with wrong password', () => {
	it('Login with wrong password', () => {
		cy.visit('/')

		cy.contains('Sign in').click()
		cy.url().should('include', '/login')

		cy.get('[name="username"]')
			.type(Cypress.config('email'))
			.should('have.value', Cypress.config('email'))

		cy.get('[name="password"]')
			.type('xxxxxxxx')

		cy.get('[type="submit"]').click()

		cy.get('[data-on="invalid"]')
			.should('have.class', 'shown')
	})
})