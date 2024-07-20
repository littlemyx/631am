import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";

import Cards from "@/my-apps/cards";

function MemoryCards() {
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  const child = useMemo(() => (showChild ? <Cards /> : null), [showChild]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="manifest" href="manifest.json" />
        <title>Memory Cards</title>
        <link rel="canonical" href="http://631am.com/memory-cards" />
      </Head>
      {child}
    </>
  );
}

export default MemoryCards;
