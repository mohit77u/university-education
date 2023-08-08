import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="top-section">
        <div className="container">
          <NavLink to="/">Aquatic Chemistry Laboratory</NavLink>
        </div>
      </div>
      <div className="middle-section">
        <div className="container">
          <NavLink to="/">Aquatic Chemistry Laboratory</NavLink>
        </div>
      </div>
      <div className="main-nav">
        <div className="container">
          <nav>
            <ul>
              {/* <li>
                <NavLink to={"/research"}>Research</NavLink>
              </li> */}
              {/* <li>
                <NavLink to={"/news"}>News</NavLink>
              </li> */}
              <li>
                <NavLink to={"/team"}>Teams</NavLink>
              </li>
              <li>
                <NavLink to={"/publications"}>Publications</NavLink>
              </li>
              <li>
                <NavLink to={"/education"}>Teaching</NavLink>
              </li>
              {/* <li>
                <NavLink to={"/group-activities"}>Group Activities</NavLink>
              </li> */}
              <li>
                <NavLink to={"/technology"}>Technology</NavLink>
              </li>
              <li>
                <NavLink to={"/funding"}>Funding</NavLink>
              </li>
              <li>
                <NavLink to={"/consultancy"}>Consultancy</NavLink>
              </li>
              <li>
                <NavLink to={"/awards"}>Awards</NavLink>
              </li>
              <li>
                <NavLink to={"/affiliations"}>Affiliations</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
