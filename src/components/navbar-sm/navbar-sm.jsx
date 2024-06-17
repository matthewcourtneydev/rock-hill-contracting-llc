import {useState, React, useEffect} from "react";
import "./navbar-sm.scss";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavbarSm = (props) => {
  const navigate = useNavigate();
  return (
    <nav id="nav-sm">
      <span className="left">
        {props.isNavMenuOpen ? (
          <>
            <IoMdClose className="icon" onClick={() => props.toggleNavMenu((prev) => !prev)} />
            <p>CLOSE</p>
          </>
        ) : (
          <>
            <RxHamburgerMenu className="icon" onClick={() => props.toggleNavMenu((prev) => !prev)} />
            <p>MENU</p>
          </>
        )}
      </span>

      <button onClick={() => props.navigateTo("/contact")}>START MY PROJECT</button>
    </nav>
  );
};

export default NavbarSm;
