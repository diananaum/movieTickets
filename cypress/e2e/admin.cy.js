import adminHappy from "../fixtures/admin";

describe("Admin login", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  context("Should login", () => {
    adminHappy.forEach((admin) => {
      it("Should login successfully", () => {
        admin.data.forEach((admin) => {
          cy.login(admin.email, admin.password);

          cy.get(".conf-step__header").should("have.length", 5);
        });
      });

      it("Should show error message if email is empty", () => {
        admin.data.forEach((admin) => {
          cy.login(null, admin.password);

          cy.get(".login__input")
            .then((element) => element[0].checkValidity())
            .should("be.false");

          cy.get(".login__input")
            .then((element) => element[0].validationMessage)
            .should("contain", "Заполните это поле");
        });
      });

      it("Should show error message if email is password", () => {
        admin.data.forEach((admin) => {
          cy.login(admin.email, null);

          cy.get(".login__input")
            .then((element) => element[1].checkValidity())
            .should("be.false");

          cy.get(".login__input")
            .then((element) => element[1].validationMessage)
            .should("contain", "Заполните это поле");
        });
      });
    });
  });
});
