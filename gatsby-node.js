/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const links = require(`./gatsby/links`);
const projects = require(`./gatsby/projects`);
const sections = [links, projects];


exports.createPages = async helpers => {
    await Promise.all(sections.map(section => section.createPages(helpers)))
};

exports.onCreateNode = helpers => {
    sections.forEach(section => section.onCreateNode(helpers))
};
