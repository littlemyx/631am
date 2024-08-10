import React, { useState } from "react";
import Head from "next/head";

import { Routes } from "./Routes";

function MemoryCards() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Memory Cards</title>
        <link rel="canonical" href="http://631am.com/memory-cards" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <Routes />
    </>
  );
}

export default MemoryCards;
