import React from 'react';
import './Navbar.scss';
import PropTypes from 'prop-types';

const Navbar = ({ links }) => {
  Navbar.propTypes = {
    links: PropTypes.array.isRequired,
  };

  return (
    <div className="navbar">
      <ul>
        {
          links.map(link => <li><a href={`#${link.toLowerCase()}`}>{link}</a></li>)
        }
      </ul>
    </div>
  );
};

export default Navbar;
