require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `numer 9 mieszkania 13`,
    description: `Spektakl Teatru Współczesnego w Szczecinie pt. „numer 9 mieszkania 13“. Nowatorskie połączenie techniki filmowej z animacją poklatkową.Reżyseria: Daria Kopiec, scenariusz: Zuzanna Bojda.`,
    siteUrl: "https://www.9m13.pl",
    keywords: [],
    author: `@teatrwspolczesnywszczecinie`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teatr Współczesny Szczecin`,
        short_name: `9m13`,
        lang: `pl`,
        start_url: `/`,
        background_color: `#1B1F1D`,
        theme_color: `#1B1F1D`,
        display: `minimal-ui`,
        icon: `src/assets/favicons/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },

    `gatsby-plugin-offline`,
  ],
}
