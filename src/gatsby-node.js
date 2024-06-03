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

  result.data.allContentfulSpecificEventPage.nodes.forEach(node => {
    createPage({
      path: `events/${node.slug}`,
      component: EventTemplate, // Corrected component path
      context: {
        title: node.eventName,
      },
    });
  });
};
