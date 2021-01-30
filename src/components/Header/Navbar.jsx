import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/home"
                        className={location.pathname === "/home" ? "nav-link active" : "nav-link"}
                    >
                        Home
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/projects"
                        className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                    >
                        Projects
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
        </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;