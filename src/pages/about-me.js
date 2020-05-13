import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import PropTypes from "prop-types";

const breadcrumb = [
    {to: "/", name: "Home"},
    {to: "/about-me", name: "About me"},
];
const AboutMePage = ({ data: { gravatar: { url: emailUrl } } }) => (
    <Layout breadcrumb={breadcrumb}>
        <SEO title="About me" />
        <h1>About me</h1>

        <div style={{float: "right"}}>
            <img src={`${emailUrl}?size=300`} alt="Florian Krauthan" title="Florian Krauthan" />
        </div>

        <table id="cv" style={{width: "66%"}}>
            <tr>
                <td className="heading">Name</td>
                <td>Florian Krauthan</td>
            </tr>
            <tr>
                <td className="heading">Birthdate</td>
                <td>15-02-1991</td>
            </tr>
            <tr>
                <td className="heading">Nickname</td>
                <td>fkrauthan</td>
            </tr>
            <tr>
                <td className="heading">Residence</td>
                <td>
                    Vancouver,<br />
                    Canada
                </td>
            </tr>
            <tr>
                <td className="heading">Certified</td>
                <td>IT Specialist for Application Development</td>
            </tr>
            <tr>
                <td className="heading">Occupation</td>
                <td>ERP Development Team Lead at FISPAN</td>
            </tr>

            <tr>
                <td className="heading">Programming skills</td>
                <td>Kotlin, Java, PHP (HTML / CSS / JS / MySQL), Javascript (Server and Client), Python, C/C++, C#, Visual Basic</td>
            </tr>
            <tr>
                <td className="heading">Experienced in</td>
                <td>
                    <ul>
                        <li>Java
                            <ul>
                                <li>Spring (MVC, Social), JSF/JSF2, EJB3, JSP (+tag library), Hibernate, Quartz, Wicket</li>
                            </ul>
                        </li>
                        <li>Kotlin
                            <ul>
                                <li>Ktor, Clikt, Multiplatform (JS and Binary)</li>
                            </ul>
                        </li>
                        <li>PHP
                            <ul>
                                <li>Symfony, YiiFramework, CakePHP, PEAR, Smarty</li>
                            </ul>
                        </li>
                        <li>WEB
                            <ul>
                                <li>ReactJS, Redux, Twitter Bootstrap, jQuery, JQuery UI, AngularJS, NodeJS, Backbone, RequireJS</li>
                            </ul>
                        </li>
                        <li>Mobile
                            <ul>
                                <li>React Native, Android SDK (Java), IOS SDK (Objective-C), JQuery Mobile (Javascript), Cordova / Phonegap (Javascript)</li>
                            </ul>
                        </li>
                        <li>C/C++
                            <ul>
                                <li>SDL, OpenGL, Qt, OpenAL, wxWidgets, DevIL, Boost, Poco</li>
                            </ul>
                        </li>
                        <li>SCM
                            <ul>
                                <li>Git, Subversion, Mercurial</li>
                            </ul>
                        </li>
                        <li>Databases
                            <ul>
                                <li>MongoDB, MySQL, PostgreSQL, Oracle DB, Sqlite</li>
                            </ul>
                        </li>
                        <li>Technologies
                            <ul>
                                <li>Kubernetes, Ansible, Docker, Service-oriented architecture (SOA), Single sign-on (SSO), Concurrency managment, Test-driven development (TDD), Android Development, IOS Development, Hybrid Development,
                                    Financial application development
                                </li>
                            </ul>
                        </li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="heading">GitHub</td>
                <td><a href="https://github.com/fkrauthan" target="_blank" rel="noopener noreferrer">fkrauthan (Florian Krauthan)</a></td>
            </tr>
            <tr>
                <td className="heading">XING</td>
                <td><a href="https://www.xing.com/profile/Florian_Krauthan" target="_blank" rel="noopener noreferrer">Florian Krauthan</a></td>
            </tr>
            <tr>
                <td className="heading">LinkedIn</td>
                <td><a href="http://www.linkedin.com/pub/florian-krauthan/30/2ab/28" target="_blank" rel="noopener noreferrer">Florian Krauthan</a></td>
            </tr>
            <tr>
                <td className="heading">Business</td>
                <td>
                    In 2008 I founded my business for Softwaredevelopment, Webdevelopment, Webdesign and Webhosting. If you are interested please contact me via the contact form.
                </td>
            </tr>
        </table>
    </Layout>
)
AboutMePage.propTypes = {
    data: PropTypes.shape({
        gravatar: PropTypes.shape({
            url: PropTypes.string.isRequired,
        }),
    }),
};


export default AboutMePage
export const pageQuery = graphql`
    query {
        gravatar(email: {eq: "mail@fkrauthan.de"}) {
            url
        }
    }
`
