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
                <li className="nav-menu-item" onClick={() => changePage("/")}>Home</li>
                <li className="nav-menu-item" onClick={() => changePage("/about")}>About</li>
                <li className="nav-menu-item" onClick={() => changePage("/interior")}>Interior Services</li>
                <li className="nav-menu-item" onClick={() => changePage("/exterior")}>Exterior Services</li>
                <li className="nav-menu-item" onClick={() => changePage("/patios")}>Patios and Porches</li>
                <li className="nav-menu-item">Before and After</li>
                <li className="nav-menu-item">Testimonials</li>
            </ul>
        </section>
    );
}

export default NavMenu;
