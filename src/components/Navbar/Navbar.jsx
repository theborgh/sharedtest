import React from "react";
import "./Navbar.scss";
import PropTypes from "prop-types";

// TODO: Make into CSS table from advanced CSS course
const Navbar = ({ links }) => {
  Navbar.propTypes = {
    links: PropTypes.array.isRequired
  };

  return (
    <div className="navbar">
      <ul>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
