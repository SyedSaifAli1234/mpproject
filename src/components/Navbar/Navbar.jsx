// Navbar.jsx

import React from 'react';
import './Navbar.css'; // Import your CSS file
import iconPng from '../../assets/navIcon.png';
import {useLocomotiveScroll} from "react-locomotive-scroll";

const Navbar = () => {

    const { scroll } = useLocomotiveScroll();

    return (
        <div className="navbar">
            <div className="left">
                <img src={iconPng} alt="Icon" className="icon" />
                Ramos
            </div>
            <div className="middle">
                <a href="#" className="nav-link">Dashboard</a>
                <a href="#" className="nav-link">Products</a>
                <a href="#" className="nav-link">Services</a>
                <a href="#" className="nav-link">About Us</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
            <div className="right">
                <button className="signup-btn">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
