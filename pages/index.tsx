import type { NextPage } from "next";
import Head from "next/head";

import Body from "@/components/Body";

import css from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>My experiments</title>
        <link rel="canonical" href="http://631am.com/experiments" />
      </Head>
      <div className={css.wrapper}>
        <div className={css.body}>
          <Body />
        </div>
      </div>
    </>
  );
};

export default Home;
