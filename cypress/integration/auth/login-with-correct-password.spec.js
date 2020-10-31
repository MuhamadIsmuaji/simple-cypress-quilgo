describe('Open Quilgo.com and try login with correct password', () => {
	it('Login with correct password', () => {
		cy.visit('/')

		cy.contains('Sign in').click()
		cy.url().should('include', '/login')

		cy.get('[name="username"]')
			.type(Cypress.config('email'))
			.should('have.value', Cypress.config('email'))

		cy.get('[name="password"]')
			.type(Cypress.config('password'))

		cy.get('[type="submit"]').click()

		cy.url()
			.should('include', '/app')
	})
})