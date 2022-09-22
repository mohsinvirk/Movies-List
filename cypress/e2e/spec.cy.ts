describe("home page spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("contains the title popular movies", () => {
    cy.contains("Popular Movies")
  })

  it("input should have correct value", () => {
    cy.get("#simple-search").type("man").should("have.value", "man")
  })

  it("visits the Crocodile Dundee", () => {
    cy.contains("Crocodile Dundee").click()

    cy.url().should("include", "/movie/4")
  })
})
