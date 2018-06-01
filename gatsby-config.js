module.exports = {
  siteMetadata: {
    title: 'Alexander Bandukwala\'s Blog',
    description: 'Blog Description'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`
  ],
}
