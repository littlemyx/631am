import React from "react";
import Head from "next/head";

function Experiments() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>My experiments</title>
        <link rel="canonical" href="http://631am.com/experiments" />
      </Head>
      Experiments
      <a href="/experiments/scrolling-deviation">Scrolling deviation</a>
    </>
  );
}

export default Experiments;
