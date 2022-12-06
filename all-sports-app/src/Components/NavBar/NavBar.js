import React from "react";
import { Link } from "react-router-dom";
import "src/NavBar.css";

const NavBar = () => {
  return (
    <>
      <h3>NavBar</h3>
      <ul>
        <Link to={"/"}>
          <li>Homepage</li>
        </Link>
        <Link to="/sportslist">
          <li>Sports List</li>
        </Link>
        <Link to="/worldrecords">
          <li>World Records</li>
        </Link>
        <Link to="/locations">
          <li>Locations</li>
        </Link>
      </ul>
    </>
  );
};

export default NavBar;