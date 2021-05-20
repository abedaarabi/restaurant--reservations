import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Nav() {
  const navStyle = { color: "white" };
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/Contact">
          <li>Contact</li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}
