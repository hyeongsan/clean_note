import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="navbar">
            <Link className="home" to="/">
              {/* <h1>home</h1> */}
            </Link>
            <div className="navMenu">
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                {/* <h1>login</h1> */}
              </NavLink>
              {/* <span className="and">&</span> */}
              <NavLink className="nav-link" to="/join" activeClassName="active">
                {/* <h1>join</h1> */}
              </NavLink>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
