/// <reference types="cypress"/>

describe("DOM", () => {
  it("<head>", () => {
    cy.visit("/");

    // General head content
    cy.get("head title").contains("Badmintonski Klub BIT");
    cy.get("head meta[name='description']").should(
      "have.attr",
      "content",
      "Spletna stran Badmintonskega kluba BIT Ljubljana."
    );
    cy.get("head link").should("have.attr", "rel", "icon");
    cy.get("head link").should("have.attr", "href", "/favicon.ico");

    // facebook card meta tags
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      "Spletna stran Badmintonskega kluba BIT Ljubljana."
    );
    cy.get('head meta[property="og:locale"]').should(
      "have.attr",
      "content",
      "sl_SI"
    );
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "website"
    );
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      `http://www.bit-badminton.com/`
    );

    // TODO need to add the club logo image later on from contentful
    // cy.get('head meta[property="og:image"]').should(
    //   "have.attr",
    //   "content",
    //   ''
    // );

    // twitter card meta tags
    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      "Badmintonski Klub BIT"
    );
    cy.get('head meta[name="twitter:description"]').should(
      "have.attr",
      "content",
      "Spletna stran Badmintonskega kluba BIT Ljubljana."
    );

    // TODO need to add the club logo image later on from contentful
    // cy.get('head meta[name="twitter:image"]').should(
    //   "have.attr",
    //   "content",
    //   imageUrl
    // );

    cy.get('head meta[name="twitter:card"]').should(
      "have.attr",
      "content",
      "summary_large_image"
    );
  });

  it("<html>", () => {
    cy.visit("/");
    // language
    cy.get("html").should("have.attr", "lang", "sl");

    // basic markup structure
    cy.get("html body header");
    cy.get("html body main");
    cy.get("html body footer");
  });
});

export default {};
