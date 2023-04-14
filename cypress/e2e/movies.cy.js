import seats from "../fixtures/seats";

describe("Ticket reservation", () => {
  it("should display 7 days", () => {
    cy.visit("/");

    cy.get(".page-nav__day").should("have.length", 7);
  });

  seats.forEach((seats) => {
    it("should select seats", () => {
      cy.visit("/");

      cy.get(".page-nav__day").eq(2).click();
      cy.get(".movie").first().contains("12:00").click();

      seats.data.forEach((seat) => {
        cy.get(`.buying-scheme__row:nth-of-type(${seat.row})`)
          .find(`.buying-scheme__chair:nth-of-type(${seat.seat})`)
          .click();
        // get если вызывается по цепочке, он ищет не в скоупе найденных элементов
      });
    });
  });
});
