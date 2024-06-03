import React from 'react';
import "./nav-menu.scss";

const NavMenu = () => {
    return (
        <section id="nav-menu" className="nav-menu">
            <ul>
                <li className="nav-menu-item">Home</li>
                <li className="nav-menu-item">About</li>
                <li className="nav-menu-item">Interior Services</li>
                <li className="nav-menu-item">Exterior Services</li>
                <li className="nav-menu-item">Before and After</li>
                <li className="nav-menu-item">Testimonials</li>
            </ul>
        </section>
    );
}

export default NavMenu;
