import React from "react"
import { Helmet } from "react-helmet"

import Layout from "src/components/Layout"
import Body from "src/components/Body"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>631am.com</title>
        <link rel="canonical" href="http://631am.com" />
      </Helmet>
      <Layout>
        <Body />
      </Layout>
    </>
  )
}
