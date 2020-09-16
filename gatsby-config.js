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
        name: `blog-template`,
        short_name: `blog`,
        lang: `pl`,
        start_url: `/`,
        background_color: `#1B1F1D`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/favicons/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: "gatsby-source-vimeo-all",
      options: {
        clientId: process.env.VIMEO_CLIENT_ID,
        clientSecret: process.env.VIMEO_CLIENT_SECRET,
        accessToken: process.env.VIMEO_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-embed-video`,
    //         options: {
    //           maxWidth: 800,
    //           ratio: 1.77,
    //           height: 400,
    //           related: false,
    //           noIframerder: true,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
    //     ],
    //   },
    // },

    // `gatsby-plugin-offline`,
  ],
}
