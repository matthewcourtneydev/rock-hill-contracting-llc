import React from "react";
import "./nav-menu.scss";
import { useNavigate } from "react-router-dom";
import img from "../../imgs/home.jpeg";
import NavbarLg from "../navbar-lg/navbar-lg";
import NavbarSm from "../navbar-sm/navbar-sm";

const NavMenu = (props) => {
  const navigate = useNavigate();

  console.log(props.currentPage);
  return (
    <section id="nav-menu" className="nav-menu">
      <NavbarSm
        navigateTo={props.navigateTo}
        isNavMenuOpen={props.isNavMenuOpen}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        toggleNavMenu={props.toggleNavMenu}
      />
      <NavbarLg
        navigateTo={props.navigateTo}
        isNavMenuOpen={props.isNavMenuOpen}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        toggleNavMenu={props.toggleNavMenu}
      />
      <img src={img} alt="" />
      <ul>
        <li
          className={props.currentPage === "/" ? "active " : ""}
          onClick={() => props.navigateTo("/")}
        >
          HOME
        </li>
        <li
          className={props.currentPage === "/about" ? "active " : ""}
          onClick={() => props.navigateTo("/about")}
        >
          ABOUT
        </li>
        <li
          className={props.currentPage === "/interior" ? "active " : ""}
          onClick={() => props.navigateTo("/interior")}
        >
          INTERIOR SERVICES
        </li>
        <li
          className={props.currentPage === "/exterior" ? "active " : ""}
          onClick={() => props.navigateTo("/exterior")}
        >
          EXTERIOR SERVICES
        </li>
        <li
          className={props.currentPage === "/patios" ? "active " : ""}
          onClick={() => props.navigateTo("/patios")}
        >
          PATIOS AND PORCHES
        </li>
        <li
          className={props.currentPage === "/hardscape" ? "active " : ""}
          onClick={() => props.navigateTo("/hardscape")}
        >
          HARDSCAPE
        </li>
        <li
          className={props.currentPage === "/portfolio" ? "active " : ""}
          onClick={() => props.navigateTo("/portfolio")}
        >
          BEFORE AND AFTER
        </li>
        <li
          className={props.currentPage === "/testimonials" ? "active " : ""}
          onClick={() => props.navigateTo("/testimonials")}
        >
          TESTIMONIALS
        </li>
      </ul>
    </section>
  );
};

export default NavMenu;
