import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const breadcrumb = [
  {to: "/", name: "Home"},
  {to: "/contact", name: "Contact"},
];
const ContactPage = () => (
    <Layout breadcrumb={breadcrumb}>
        <SEO title="Contact" />
        <h1>Contact</h1>

        <fieldset>
            <legend>General information</legend>
            <dl>
                <dt>Address</dt>
                <dd>Florian Krauthan</dd>
                <dd>411 - 6893 Prenter Street</dd>
                <dd>V5E 4L3, Burnaby, British Columbia</dd>
                <dd>Canada</dd>
            </dl>

            <dl>
                <dt>E-Mail</dt>
                <dd><a href="mailto:info@cogindo.net">info@cogindo.net</a></dd>
            </dl>
        </fieldset>
    </Layout>
)

export default ContactPage
