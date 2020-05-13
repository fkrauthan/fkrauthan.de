import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const TemplateViewProject = ({
                               data: {
                                 project: { name, childMarkdownRemark: { html, frontmatter: { title, developmentStart, releaseDate, projectCategory: { id: categoryId, name: categoryName } } } }
                               }
                             }) => {
  const breadcrumb = [
    {to: "/", name: "Home"},
    {to: "/projects", name: "Projects"},
    {to: `/projects/${categoryId}`, name: categoryName},
    {to: `/projects/${categoryId}/${name}`, name: title},
  ];

  return (
    <Layout breadcrumb={breadcrumb}>
      <SEO title={`${title} | ${categoryName} | Projects`} />
      <h1>{title}</h1>

      <fieldset>
        <legend>Description</legend>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </fieldset>

      {(developmentStart || releaseDate) && (
        <fieldset>
          <legend>Project dates</legend>

          <dl>
            {developmentStart && (
              <>
                <dt>Development start</dt>
                <dd>{developmentStart}</dd>
              </>
            )}
            {releaseDate && (
              <>
                <dt>First release</dt>
                <dd>{releaseDate}</dd>
              </>
            )}
          </dl>
        </fieldset>
      )}
    </Layout>
  );
};
TemplateViewProject.propTypes = {
  pageContext: PropTypes.shape({
    projectId: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          developmentStart: PropTypes.string,
          releaseDate: PropTypes.string,

          projectCategory: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  })
};

export default TemplateViewProject;
export const pageQuery = graphql`
    query($projectId: String!) {
        project: file(id: {eq: $projectId}) {
            name
            childMarkdownRemark {
                html
                frontmatter {
                    title
                    developmentStart
                    releaseDate

                    projectCategory {
                        id
                        name
                    }
                }
            }
        }
    }
`;
