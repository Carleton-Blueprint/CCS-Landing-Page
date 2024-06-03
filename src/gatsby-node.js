const path = require(`path`);

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const EventTemplate = path.resolve(`src/templates/EventTest.js`);
  const result = await graphql(`
    query {
      allContentfulSpecificEventPage {
        nodes {
          slug
          eventName
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  result.data.allContentfulEvent.nodes.forEach((node) => {
    createPage({
      path: `/events/${node.slug}`,
      component: path.resolve(`./src/templates/eventTemplate.js`),
      context: {
        slug: node.slug,
        title: node.eventName,
      },
    });
  });
};
