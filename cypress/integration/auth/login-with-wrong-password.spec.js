describe('Open Quilgo.com and try login with wrong password', () => {
	it('Login with wrong password', () => {
		cy.visit('/')

		cy.contains('Sign in').click()

		// assert url
		cy.url().should('include', 'login')

		// fill email
		cy.get('[name="username"]')
			.type(Cypress.config('email'))
			.should('have.value', Cypress.config('email'))

		// fill wrong password
		cy.get('[name="password"]')
			.type('xxxxxxxx')

		cy.get('[type="submit"]')
			.contains('Sign in')
			.click()

		// assert error
		cy.get('[data-on="invalid"]')
			.should('have.class', 'shown')
	})
})