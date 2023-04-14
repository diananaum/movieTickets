describe("petstore api", () => {
  it("should create, get and delete pet", () => {
    cy.request({
      url: "https://petstore.swagger.io/v2/pet",
      body: {
        id: 400,
        name: "doggie",
        photoUrls: [],
      },
      method: "POST",
    }).then((result) => {
      expect(result.status).is.equal(200);
      expect(result.body).is.eqls({
        id: 400,
        name: "doggie",
        photoUrls: [],
        tags: [],
      });

      cy.request(`https://petstore.swagger.io/v2/pet/${result.body.id}`).then(
        (result) => {
          expect(result.status).is.equal(200);
          expect(result.body).is.eqls({
            id: 400,
            name: "doggie",
            photoUrls: [],
            tags: [],
          });
        }
      );

      cy.request(
        "DELETE",
        `https://petstore.swagger.io/v2/pet/${result.body.id}`
      ).then((result) => {
        expect(result.status).is.equal(200);
      });
    });
  });
});
