/// <reference types="cypress"/>

describe("layout footer", () => {
  beforeEach(() => {
    // TODO add checking layout for every route
    // TODO add scrolling to the bottom of the page and asserting everything is visible on different devices
    cy.visit("/");
  });

  it("footer role", () => {
    cy.get('footer[data-testid="layout-footer"]').should(
      "have.attr",
      "role",
      "contentinfo"
    );
  });

  it("address info", () => {
    cy.get('footer[data-testid="layout-footer"] address a')
      .contains("Badmintonski klub BIT, Litijska cesta 57, 1000 Ljubljana")
      .should(
        "have.attr",
        "href",
        "https://www.google.com/maps/place/Badmintonski+klub+bit/@46.0485247,14.5491687,15z/data=!4m5!3m4!1s0x0:0x441e20c2310991b1!8m2!3d46.0486472!4d14.5491666"
      )
      .should("have.attr", "rel", "noreferrer")
      .should("have.attr", "target", "_blank");

    cy.get('footer[data-testid="layout-footer"] address a')
      .contains("bklub.bit@gmail.com")
      .should("have.attr", "href", "mailto:bklub.bit@gmail.com");

    cy.get('footer[data-testid="layout-footer"] address a')
      .contains("+01 548 0055")
      .should("have.attr", "href", "tel:+015480055");

    cy.get('footer[data-testid="layout-footer"] address a')
      .contains("Instagram")
      .should("have.attr", "href", "https://www.instagram.com/bk_bit/")
      .should("have.attr", "rel", "noreferrer")
      .should("have.attr", "target", "_blank");

    cy.get('footer[data-testid="layout-footer"] address a')
      .contains("Facebook")
      .should("have.attr", "href", "https://www.facebook.com/bit.badminton/")
      .should("have.attr", "rel", "noreferrer")
      .should("have.attr", "target", "_blank");
  });

  it("navigation", () => {
    interface LinkData {
      href: string;
      text: string;
    }

    const NAV_LINKS: LinkData[] = [
      { href: "/", text: "Novice" },
      { href: "/ponudba", text: "Ponudba" },
      { href: "/klub", text: "Klub" },
      { href: "/galerija", text: "Galerija" },
      { href: "/kontakt", text: "Kontakt" },
    ];

    NAV_LINKS.forEach(({ href, text }) => {
      cy.get('footer[data-testid="layout-footer"] nav a')
        .contains(text)
        .should("have.attr", "href", href);
    });
  });

  it("sponsors", () => {
    cy.get('footer[data-testid="layout-footer"] section h3').contains(
      "Naši pokrovitelji"
    );
  });
});

export default {};
