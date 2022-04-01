import React from "react";
import { NavLink } from "react-router-dom";
import Boca from "../../img/boca.png";

import "./navbar.css";
const NavBar = () => {
  return (
    <div>
      <img src={Boca} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favs">Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
