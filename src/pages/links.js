import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";

const breadcrumb = [
  {to: "/", name: "Home"},
  {to: "/links", name: "Links"},
];
const LinksPage = ({
                       data: {
                           categories: { nodes },
                       },
                   }) => (
    <Layout breadcrumb={breadcrumb}>
        <SEO title="Links" />

        <div>
            <h1>Links</h1>
            <ul>
                {nodes.map(({ id, name }) => (
                    <li key={id}>
                        <Link to={`/links/${id}/`}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
)
LinksPage.propTypes = {
    data: PropTypes.shape({
        categories: PropTypes.shape({
          nodes: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
                }).isRequired
            ),
        }),
    }),
}
export default LinksPage
export const pageQuery = graphql`
    query {
        categories: allLinkCategoriesYaml(sort: {fields: name, order: ASC}) {
            nodes {
                id
                name
            }
        }
    }
`
