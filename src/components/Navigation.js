import React from "react";
import { Link } from "react-router-dom"


function Navigation() {
  const textStyle = {
    color:"#a45c5c",
    background: '#f0ece2',
    textDecoration:"none"
   
  }
  return (
    <nav className="nav container-fluid d-flex justify-content-between hv-25" >
      <p className="justify-content-start mt-3 ms-1 fs-2 text-uppercase" style={textStyle}>
       <Link className="justify-content-start mt-3 ms-1 fs-2 text-uppercase link-offset-2 link-underline-opacity-0" style={textStyle} to="/"> Carolina Haggerty </Link>
      </p>
    <ul className="nav justify-content-end mt-3" >
      <li className="nav-item px-4">
        <Link className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={textStyle} to="/">About</Link>
      </li>
      <li className="nav-item px-4">
        <Link className=" link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={textStyle}  to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item px-4">
        <Link className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={textStyle}  to="/contact">Contact</Link>
      </li>
      <li className="nav-item px-4">
        <Link className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={textStyle}  to="/resume">Resume</Link>
      </li>
    </ul>
    </nav>
  );
}

export default Navigation;