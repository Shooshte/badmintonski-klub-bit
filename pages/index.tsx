import type { NextPage } from "next";
import Head from "next/head";

import { getSponzorji, Sponzorji } from "../lib/api";

import Footer from "../layout/footer";

interface Props {
  sponzorji: Sponzorji;
}

const Home: NextPage = ({ sponzorji }: Props) => {
  return (
    <>
      <Head>
        <title>Badmintonski Klub BIT</title>
        <meta
          name="description"
          content="Spletna stran Badmintonskega kluba BIT Ljubljana."
        />

        <meta
          property="og:description"
          content="Spletna stran Badmintonskega kluba BIT Ljubljana."
        />
        <meta property="og:locale" content="sl_SI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.bit-badminton.com/" />

        <meta name="twitter:title" content="Badmintonski Klub BIT" />
        <meta
          name="twitter:description"
          content="Spletna stran Badmintonskega kluba BIT Ljubljana."
        />
        <meta name="twitter:card" content="summary_large_image"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>
      <main></main>
      <Footer {...sponzorji} />
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  // Load sponsor images here
  const sponzorji = (await getSponzorji(preview)) ?? [];
  return {
    props: { sponzorji },
  };
}

export default Home;
