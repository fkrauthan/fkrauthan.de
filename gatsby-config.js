module.exports = {
  siteMetadata: {
    title: `fkrauthan.de`,
    description: `My personal website showcasing some of the projects I worked on overtime.`,
    author: `Florian Krauthan`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.linkCategory": `LinkCategoriesYaml`,
    "MarkdownRemark.frontmatter.projectCategory": `ProjectCategoriesYaml`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `links`,
        path: `${__dirname}/content/links`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-gravatar`,
      options: {
        emails: [
          `mail@fkrauthan.de`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fkrauthan.de`,
        short_name: `fkrauthan.de`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
