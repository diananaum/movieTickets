describe("Main page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be visible title", () => {
    cy.get(".page-header__title").should("contain", "Идём")
  });

  it("Should display 7 days", () => {
    cy.get(".page-nav__day").should("have.length", 7);
  });

  it("Should display 2 movies", () => {
    cy.get(".movie").should("have.length", 2);
  });

  it("Should display movies' timetable", () => {
    cy.get(".movie-seances__time-block").should("have.length", 5);
  });
});
