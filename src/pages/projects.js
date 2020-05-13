import React from "react";
import PropTypes from "prop-types";

// Components
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const breadcrumb = [
  {to: "/", name: "Home"},
  {to: "/projects", name: "Projects"},
];
const ProjectsPage = ({
                        data: {
                          categories: { nodes }
                        }
                      }) => (
  <Layout breadcrumb={breadcrumb}>
    <SEO title="Projects" />

    <div>
      <h1>Projects</h1>
      <ul>
        {nodes.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/projects/${id}/`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);
ProjectsPage.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired
      )
    })
  })
};
export default ProjectsPage;
export const pageQuery = graphql`
    query {
        categories: allProjectCategoriesYaml(sort: {fields: name, order: ASC}) {
            nodes {
                id
                name
            }
        }

        allFile(filter: {sourceInstanceName: {eq: "projects"}, relativeDirectory: {eq: ""}}) {
            nodes {
                name
                childMarkdownRemark {
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
