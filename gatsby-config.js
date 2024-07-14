/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-custom`,
      options: {
        apiKey: process.env.API_KEY,
      },
    },
  ],
};
module.exports = {
  siteMetadata: {
    title: `Carleton CUSEC Society`,
    description: 'Placeholder Description',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'owxbf1uvibLAnDGa_9NTPM0lqt-Wiqa3hA5RyeTpN4A',
        spaceId: 'ktj6j9l1ry7f',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
  ],
};
