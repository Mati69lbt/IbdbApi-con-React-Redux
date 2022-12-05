import React from "react";
import { Link, NavLink } from "react-router-dom";
// import Boca from "./static/media";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="a">
      <ul>
        <li>
          <Link to="/">
            <img
              src={"./static/media/boca.3b32ec283e94c9951e50.png"}
              alt="boca"
              height={50}
            />
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
            Favoritos
          </NavLink>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
};

export default NavBar;
