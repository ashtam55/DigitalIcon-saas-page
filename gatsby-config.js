require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Digital Icon | Connected living`,
  },
  plugins: [
    // {
    //   resolve: `@lekoarts/gatsby-theme-cara`,
    //   options: {},
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Cara - @lekoarts/gatsby-theme-cara`,
    //     short_name: `Cara`,
    //     description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    //     start_url: `/`,
    //     background_color: `#141821`,
    //     theme_color: `#f6ad55`,
    //     display: `standalone`,
    //     icons: [
    //       {
    //         src: `/digitalicon-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/digitalicon-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
