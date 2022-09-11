import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="btn-container">
          <Link className="navbar-brand nav-btn" to="/">
            {props.name}
          </Link>
          <Link className="nav-btn" to="/about">
            about
          </Link>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  name: "set your name",
};
