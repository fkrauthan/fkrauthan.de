import React from "react";
import PropTypes from "prop-types";

// Components
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const TemplateListProjects = ({
                                pageContext: { categoryId }, data: {
    category: { name: categoryName },
    projects: { nodes }
  }
                              }) => {
  const breadcrumb = [
    {to: "/", name: "Home"},
    {to: "/projects", name: "Projects"},
    {to: `/projects/${categoryId}`, name: categoryName},
  ];

  return (
    <Layout breadcrumb={breadcrumb}>
      <SEO title={`${categoryName} | Projects`} />
      <h1>{categoryName}</h1>

      <table cellPadding="0" cellSpacing="0">
        <thead>
        <tr>
          <th>Title</th>
          <th>Development start</th>
          <th>First release</th>
        </tr>
        </thead>
        <tbody>
        {nodes.map(project => (
          <tr key={project.name}>
            <td><Link to={`/projects/${categoryId}/${project.name}`}>{project.childMarkdownRemark.frontmatter.title}</Link></td>
            <td>{project.childMarkdownRemark.frontmatter.developmentStart || `-`}</td>
            <td>{project.childMarkdownRemark.frontmatter.releaseDate || `-`}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </Layout>
  );
};
TemplateListProjects.propTypes = {
  pageContext: PropTypes.shape({
    categoryTitle: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          childMarkdownRemark: PropTypes.shape({
            html: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              developmentStart: PropTypes.string,
              releaseDate: PropTypes.string
            }).isRequired
          }).isRequired
        }).isRequired
      )
    })
  })
};

export default TemplateListProjects;
export const pageQuery = graphql`
    query($categoryId: String!) {
        category: projectCategoriesYaml(id: {eq: $categoryId}) {
            name
        }

        projects: allFile(filter: {childMarkdownRemark: {frontmatter: {projectCategory: {id: {eq: $categoryId}}}}}) {
            nodes {
                name
                childMarkdownRemark {
                    html
                    frontmatter {
                        title
                        developmentStart
                        releaseDate
                    }
                }
            }
        }
    }
`;
