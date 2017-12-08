describe('My First Passing Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('My First Failng Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(false)
  })
})

describe('Kitche Sink app test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

  })
})