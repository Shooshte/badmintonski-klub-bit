import Link from "next/link";

const Footer = () => (
  <footer data-testid="layout-footer" role="contentinfo">
    <section>
      <h3>Naši pokrovitelji</h3>
    </section>
    <nav>
      <Link href="/">Novice</Link>
      <Link href="/ponudba">Ponudba</Link>
      <Link href="/klub">Klub</Link>
      <Link href="/galerija">Galerija</Link>
      <Link href="/kontakt">Kontakt</Link>
    </nav>
    <address>
      <a
        href="https://www.google.com/maps/place/Badmintonski+klub+bit/@46.0485247,14.5491687,15z/data=!4m5!3m4!1s0x0:0x441e20c2310991b1!8m2!3d46.0486472!4d14.5491666"
        rel="noreferrer"
        target="_blank"
      >
        Badmintonski klub BIT, Litijska cesta 57, 1000 Ljubljana
      </a>
      <a href="mailto:bklub.bit@gmail.com">bklub.bit@gmail.com</a>
      <a href="tel:+015480055">+01 548 0055</a>
      <a
        href="https://www.instagram.com/bk_bit/"
        rel="noreferrer"
        target="_blank"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/bit.badminton/"
        rel="noreferrer"
        target="_blank"
      >
        Facebook
      </a>
    </address>
  </footer>
);

export default Footer;
