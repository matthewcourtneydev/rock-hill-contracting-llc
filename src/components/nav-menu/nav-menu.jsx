import React from 'react';
import "./nav-menu.scss";
import { useNavigate } from 'react-router-dom';

const NavMenu = (props) => {
    const navigate = useNavigate();

    function changePage(page) {
        props.toggleNavMenu((prev) => !prev)
        navigate(page)
    }
    return (
        <section id="nav-menu" className="nav-menu">
            <ul>
                <li className="nav-menu-item" onClick={() => changePage("/")}>HOME</li>
                <li className="nav-menu-item" onClick={() => changePage("/about")}>ABOUT</li>
                <li className="nav-menu-item" onClick={() => changePage("/interior")}>INTERIOR SERVICES</li>
                <li className="nav-menu-item" onClick={() => changePage("/exterior")}>EXTERIOR SERVICES</li>
                <li className="nav-menu-item" onClick={() => changePage("/patios")}>PATIOS AND PORCHES</li>
                <li className="nav-menu-item">BEFORE AND AFTER</li>
                <li className="nav-menu-item">TESTIMONIALS</li>
            </ul>
        </section>
    );
}

export default NavMenu;
