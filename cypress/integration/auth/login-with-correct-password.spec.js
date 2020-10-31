describe('Open Quilgo.com and try login with correct password', () => {
	it('Login with correct password', () => {
		cy.visit('/')

		cy.contains('Sign in').click()

		// assert url
		cy.url().should('include', 'login')

		// fill email
		cy.get('[name="username"]')
			.type(Cypress.config('email'))
			.should('have.value', Cypress.config('email'))

		// fill correct password
		cy.get('[name="password"]')
			.type(Cypress.config('password'))

		cy.get('[type="submit"]').click()

		// assert logged in
		cy.url()
			.should('include', '/app')
	})
})