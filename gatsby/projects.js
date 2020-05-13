const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const projectListTemplate = path.resolve("src/templates/template-list-projects.js");
    const projectViewTemplate = path.resolve("src/templates/template-view-project.js");
    const { data, errors } = await graphql(`
      {
        categories: allProjectCategoriesYaml {
            nodes {
                id
            }
        }
        projects: allFile(filter: {childMarkdownRemark: {frontmatter: {projectCategory: {id: {ne: null}}}}}) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                projectCategory {
                  id
                }
              }
            }
            name
            id
          }
        }
      }
    `);
    if (errors) {
        throw errors;
    }

    // Create category pages
    data.categories.nodes.forEach(({ id }) => {
        createPage({
            path: `projects/${id}`,
            component: projectListTemplate,
            context: {
                categoryId: id,
            },
        });
    });

    // Create actual project pages
    data.projects.nodes.forEach(({ id, name, childMarkdownRemark }) => {
        createPage({
            path: `projects/${childMarkdownRemark.frontmatter.projectCategory.id}/${name}`,
            component: projectViewTemplate,
            context: {
                projectId: id,
            },
        });
    });
};

exports.onCreateNode = helpers => {};
