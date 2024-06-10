import React from 'react';
import "./navbar-lg.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const NavbarLg = (props) => {
    return (
        <nav id="nav-lg">
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
      <span className="right">
      <span><FaFacebookF /></span><span><FaXTwitter /></span><span><AiFillInstagram /></span>
      </span>
        </nav>
    );
}

export default NavbarLg;
