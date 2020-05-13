import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const breadcrumb = [
  {to: "/", name: "Home"}
]
const IndexPage = () => (
  <Layout breadcrumb={breadcrumb}>
    <SEO title="Home" />

    <h1>Home</h1>


    <p>Welcome to my personal website. You will find information about my projects. Some are completed and some are still under construction. Have fun surfing.</p>
    <p>Florian Krauthan (fkrauthan)</p>
  </Layout>
)

export default IndexPage
