import { Link } from "gatsby"
import React from "react"

import "./nav-bar.css"

const NavBar = () => (
    <nav className="nav-bar">
        <ul>
            <li><Link to="/about-me">About me</Link></li>
            <li><Link to="/links">Links</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);
export default NavBar