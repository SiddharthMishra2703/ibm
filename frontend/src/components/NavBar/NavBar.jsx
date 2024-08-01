import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg color-nav sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {/* <img src="/image/navlogo.webp" className="d-inline-block align-top img" alt="logo" /> */}
                    IBM-Project
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/articles">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}