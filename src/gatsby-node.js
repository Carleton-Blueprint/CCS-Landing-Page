const path = require(`path`);
import { graphql } from "gatsby";

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query {
        allContentfulSpecificEventPage {
            nodes {
            slug
            eventName
    }
  }
}
`)
  result.data.allContetnfulSpecificEventPage.nodes.forEach(node => {
    console.log("Hello");
    createPage({
      path: `events/${node.slug}`,
      component: path.resolve(`./src/template/EventTest.js`),
      context: {
        title: node.eventName,
      },
    })
  })
}