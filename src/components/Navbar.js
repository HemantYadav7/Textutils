import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { name } = props;
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="btn-container">
          <Link className="navbar-brand nav-btn" to="/">
            {name}
          </Link>
          <Link className="nav-btn" to="/about">
            about
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  name: "set your name",
};
