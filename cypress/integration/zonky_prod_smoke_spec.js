describe('Zonky smoke test', function() {
  it('Open marketplace and do basic checks', function() {
    cy.visit('/')

    cy.contains('Nové příběhy')
    cy.contains('Sekundární trh')

    // switch to Secondary marketplace
    cy
    	.get('a[data-test-marketplace-switcher="secondary"]')
    	.click()

    // checks that we are on the secondary marketplace page
    cy
    	.url()
    	.should('include', '/sekundarni-trh')
    cy
    	.get('a[data-test-marketplace-switcher="secondary"]')
    	.should('have.class', 'active')

    // click login and check that Login page is rendered
    cy
    	.get('a[data-test-application-header="login"]')
    	.click()

    cy
    	.url()
    	.should('include', '/account/login')

    cy
    	.get('input[name="email"]')
    	.should('be.visible')
    	.get('input[name="password"]')
    	.should('be.visible')
    	.get('button[data-test-account-login-form="submit"]')
    	.should('be.visible')

  })
})