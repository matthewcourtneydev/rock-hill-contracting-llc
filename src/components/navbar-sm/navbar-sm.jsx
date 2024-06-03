import {useState, React, useEffect} from "react";
import "./navbar-sm.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavbarSm = (props) => {
  return (
    <nav id="nav-sm">
      <span className="left">
        {props.isNavMenuOpen ? (
          <>
            <IoMdClose className="icon" onClick={() => props.toggleNavMenu((prev) => !prev)} />
            <p>Close</p>
          </>
        ) : (
          <>
            <RxHamburgerMenu className="icon" onClick={() => props.toggleNavMenu((prev) => !prev)} />
            <p>Menu</p>
          </>
        )}
      </span>

      <button>START MY PROJECT</button>
    </nav>
  );
};

export default NavbarSm;
