"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    useEffect(() => {
        // Ensure Bootstrap JS is loaded if necessary
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container-fluid">
                {/* Logo Image */}
                <Link className="navbar-brand" href="#">
                    <img src="Images/emmetralogo.png" alt="Logo" style={{ height: '60px', width: '150px' }} />
                </Link>
                
                {/* Toggler Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{ marginLeft: '15px' }}>
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '15px' }}>
                            <Link className="nav-link active" aria-current="page" href="/overview">Overview</Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '15px' }}>
                            <Link className="nav-link active" aria-current="page" href="/services">Services</Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '15px' }}>
                            <Link className="nav-link active" aria-current="page" href="#">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
