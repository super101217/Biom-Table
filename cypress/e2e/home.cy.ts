// https://on.cypress.io/api

describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('visits the app root url', () => {
    cy.get("[cy-data-id='select-box']").should('exist');
    cy.get("[cy-data-id='pagination']").should('exist');
    cy.get("[cy-data-id='data-row']").should('exist');
  });
  it('Check Select box', () => {
    cy.get("[cy-data-id='select-box']").select(7);
    cy.get("[cy-data-id='data-row']")
      .first()
      .contains('Lactobacillus crispatus SJ-3C-US');
    cy.get("[cy-data-id='select-box']").select(6);
    cy.get("[cy-data-id='data-row']")
      .first()
      .contains('Lactobacillus crispatus');
  });
  it('Check Pagination', () => {
    cy.get("[cy-data-id='pagination']").find('li a').eq(2).click();
    cy.get("[cy-data-id='data-row']").first().contains('3.88');
    cy.get("[cy-data-id='pagination']").find('li a').eq(0).click();
    cy.get("[cy-data-id='data-row']").first().contains('139028.29');
    cy.get("[cy-data-id='pagination']").find('li a').last().click();
    cy.get("[cy-data-id='data-row']").first().contains('3.88');
    cy.get("[cy-data-id='pagination']").find('li a').eq(4).click();
    cy.get("[cy-data-id='data-row']").first().contains('12.47');
    // cy.get("[cy-data-id='data-row']")
    //   .first()
    //   .contains("Lactobacillus crispatus");
  });
});
