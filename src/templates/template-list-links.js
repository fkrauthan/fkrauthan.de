import React from "react";
import PropTypes from "prop-types";

// Components
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const TemplateListLinks = ({
  pageContext: {
    categoryId,
  },
                             data: {
                               category: { name: categoryName },
                               links: { nodes }
                             }
                           }) => {
  const breadcrumb = [
    {to: "/", name: "Home"},
    {to: "/links", name: "Links"},
    {to: `/links/${categoryId}`, name: categoryName},
  ];

  return (
    <Layout breadcrumb={breadcrumb}>
      <SEO title={`${categoryName} | Links`} />
      <h1>{categoryName}</h1>

      <ul>
        {nodes.map(link => (
          <li key={link.name}>
            <a href={link.childMarkdownRemark.frontmatter.url} target="_blank" rel="noopener noreferrer">
              {link.childMarkdownRemark.frontmatter.title}
            </a>
            <br />
            <section dangerouslySetInnerHTML={{ __html: link.childMarkdownRemark.html }} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};
TemplateListLinks.propTypes = {
  pageContext: PropTypes.shape({
    categoryId: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    links: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          childMarkdownRemark: PropTypes.shape({
            html: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired
            }).isRequired
          }).isRequired
        }).isRequired
      )
    })
  })
};

export default TemplateListLinks;
export const pageQuery = graphql`
    query($categoryId: String!) {
        category: linkCategoriesYaml(id: {eq: $categoryId}) {
            name
        }
        links: allFile(filter: {childMarkdownRemark: {frontmatter: {linkCategory: {id: {eq: $categoryId}}}}}) {
            nodes {
                name
                childMarkdownRemark {
                    html
                    frontmatter {
                        title
                        url
                    }
                }
            }
        }
    }
`;
