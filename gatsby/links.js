const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const linkTemplate = path.resolve("src/templates/template-list-links.js");
    const { data, errors } = await graphql(`
      {
        categories: allLinkCategoriesYaml {
            nodes {
                id
            }
        }
      }
    `);
    if (errors) {
        throw errors;
    }

    data.categories.nodes.forEach(({ id }) => {
        createPage({
            path: `links/${id}`,
            component: linkTemplate,
            context: {
                categoryId: id,
            },
        });
    });
};

exports.onCreateNode = helpers => {};
