/// <reference types="cypress"/>

const TEST_LAYOUTS: Cypress.ViewportPreset[] = [
  "iphone-6",
  "iphone-x",
  "ipad-mini",
  "macbook-11",
  "macbook-15",
];

const testLayout = (url: string) => {
  TEST_LAYOUTS.forEach((layout) => {
    describe(`${layout} layout`, () => {
      beforeEach(() => {
        // TODO add checking layout for every route
        // TODO add scrolling to the bottom of the page and asserting everything is visible on different devices
        cy.visit(url);
      });

      describe("<head>", () => {
        it("google fonts", () => {
          cy.get("head link[href='https://fonts.googleapis.com']").should(
            "have.attr",
            "rel",
            "preconnect"
          );

          cy.get("head link[href='https://fonts.gstatic.com']").should(
            "have.attr",
            "rel",
            "preconnect"
          );

          cy.get(
            "head link[href='https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap']"
          ).should("have.attr", "rel", "stylesheet");
        });
      });

      describe("<footer>", () => {
        it("footer role", () => {
          cy.get('footer[data-testid="layout-footer"]').should(
            "have.attr",
            "role",
            "contentinfo"
          );
        });

        it("address info", () => {
          cy.get('footer[data-testid="layout-footer"] address a')
            .contains(
              "Badmintonski klub BIT, Litijska cesta 57, 1000 Ljubljana"
            )
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

          cy.get(
            'footer[data-testid="layout-footer"] address a[href="https://www.instagram.com/bk_bit/"]'
          )
            .should("have.attr", "aria-label", "instagram")
            .should("have.attr", "rel", "noreferrer")
            .should("have.attr", "role", "button")
            .should("have.attr", "target", "_blank");

          cy.get(
            'footer[data-testid="layout-footer"] address a[href="https://www.instagram.com/bk_bit/"] svg'
          )
            .should("have.attr", "aria-hidden", "true")
            .should("have.attr", "focusable", "false");

          cy.get(
            'footer[data-testid="layout-footer"] address a[href="https://www.facebook.com/bit.badminton/"]'
          )
            .should("have.attr", "aria-label", "facebook")
            .should("have.attr", "rel", "noreferrer")
            .should("have.attr", "role", "button")
            .should("have.attr", "target", "_blank");

          cy.get(
            'footer[data-testid="layout-footer"] address a[href="https://www.facebook.com/bit.badminton/"] svg'
          )
            .should("have.attr", "aria-hidden", "true")
            .should("have.attr", "focusable", "false");
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
              .should("have.attr", "href", href)
              .click();
            cy.url().should("include", href);
            cy.visit(url);
          });
        });

        it("sponsors", () => {
          const sponzorjiSelector =
            'footer[data-testid="layout-footer"] section[data-testid="sponzorji"]';

          cy.get(`${sponzorjiSelector} h3`)
            .should("be.visible")
            .should("not.be.empty");

          cy.get(`${sponzorjiSelector} img`)
            .should(($images) => {
              expect($images).to.not.have.length(0);
            })
            .each((image) => {
              expect(image).to.have.attr("alt");
              expect(image).to.have.attr("src");
            });
        });
      });
    });
  });
};
export default testLayout;
