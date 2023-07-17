import React from "react";
import Head from "next/head";

import Title from "@/components/Title";
import Experience from "@/components/Experience";
import AdditionalInfo from "@/components/AdditionalInfo";

import css from "./index.module.css";

function Experiments() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>CV</title>
        <link rel="canonical" href="http://631am.com/experiments" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous | use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=optional"
          rel="stylesheet"
        />
      </Head>
      <div className={css.wrapper}>
        <Title />
        <div className={css.twoColumns}>
          <div className={css.leftColumn}>
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiments;
