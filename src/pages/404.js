import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const breadcrumb = [
  {to: "/", name: "Home"},
  {to: "/404", name: "404"}
]
const NotFoundPage = () => (
  <Layout breadcrumb={breadcrumb}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
