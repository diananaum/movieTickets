import admin from "../fixtures/admin";
import seats from "../fixtures/seats";

describe("Book ticket", () => {
  it.only("Should find movie name from admin page and book tickets", () => {
    cy.visit("/admin");

    admin.forEach((admin) => {
      admin.data.forEach((admin) => {
        cy.login(admin.email, admin.password);

        cy.get(".conf-step__header").should("have.length", 5);
      });
    });

    cy.get(".conf-step__movie-title")
      .eq(0)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal("Train arrival");

        cy.visit("/");

        cy.get(".page-nav__day").should("have.length", 7);

        cy.get(".movie__title").should("contain", text);
      });

    cy.get(".movie-seances__time")
      .not(".acceptin-button-disabled")
      .first()
      .click();

    seats.forEach((seats) => {
      seats.data.forEach((seat) => {
        cy.get(`.buying-scheme__row:nth-of-type(${seat.row})`)
          .find(`.buying-scheme__chair:nth-of-type(${seat.seat})`)
          .click();
      });
    });

    cy.get(".acceptin-button")
      .then((element) => element[0].checkValidity())
      .should("be.true");

    cy.get(".acceptin-button").click();

    cy.get(".tichet__check").contains("Вы выбрали билеты:");
  });
});
