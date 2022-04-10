import React from "react";
import { Link, NavLink } from "react-router-dom";
import Boca from "../../img/boca.png";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="a">
      <ul>
        <li>
          <Link to="/">
            <img src={Boca} alt="" height={50} />
          </Link>
        </li>
        <li>
          {" "}
          <NavLink to="/" className="nl">
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/favs" className="nl">
            Favoritas
          </NavLink>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
};

export default NavBar;
