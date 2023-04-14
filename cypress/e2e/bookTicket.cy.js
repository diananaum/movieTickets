import adminHappy from "../fixtures/admin";

describe("Should book ticket", () => {
  beforeEach(() => {
    cy.visit("/admin");

    adminHappy.forEach((admin) => {
      admin.data.forEach((admin) => {
        cy.login(admin.email, admin.password);
      });
    });
  });

  it("", () => {});
});
