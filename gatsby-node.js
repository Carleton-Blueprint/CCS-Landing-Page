const path = require(`path`);
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const EventTemplate = path.resolve(`src/templates/eventTemplate.js`);
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


  result.data.allContentfulSpecificEventPage.nodes.forEach(({ slug }) => {
    createPage({
      path: `/events/${slug}`,
      component: EventTemplate,
      context: {
        slug: slug,
      },
    });
  });
};
