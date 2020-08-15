/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "631am.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon.svg`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Alata`,
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
