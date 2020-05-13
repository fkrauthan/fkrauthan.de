import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <div style={{marginBottom: "1em"}}>
      {breadcrumb.map(({ to, name }, index) => {
        const first = index === 0;
        const last = breadcrumb.length - 1 === index;
        return (
          <span key={to}>
            {!first && " » "}
            {!last && (<Link to={to}>{name}</Link>)}
            {last && (name)}
          </span>
        );
      })}
    </div>
  );
};
Breadcrumb.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.node.isRequired
    })
  ).isRequired
};

export default Breadcrumb;
