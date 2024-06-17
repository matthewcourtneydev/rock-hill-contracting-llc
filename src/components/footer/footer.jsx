import React from "react";
import  "./footer.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import logo from "../../imgs/logo.png"


const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <section className="contact">
        <h4>GET IN TOUCH</h4>
        <div className="container">
          <span className="icon">
            <FaLocationDot />
          </span>
          <p className="content-p">123 Main St Rock Hill, SC 12345</p>
        </div>
        <div className="container">
          <span className="icon">
            <FaPhoneAlt />
          </span>
          <p className="content-p">(704) 123-1111</p>
        </div>
        <div className="container">
          <span className="icon">
            <MdEmail />
          </span>
          <p className="content-p">email@gmail.com</p>
        </div>
      </section>
      <section className="contact-form">
        <h4>SEND US A MESSAGE</h4>
        <form action="submit" id="contactForm">
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="phone">Phone</label>
            <input type="phone" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="35" rows="5"></textarea>
            <button className="submit">SUBMIT</button>
        </form>
      </section>
      <section className="services">
        <h4>SERVICES</h4>
        <ul>
            <li onClick={() => props.navigateTo("/exterior")}>Exterior</li>
            <li onClick={() => props.navigateTo("/interior")}>Interior</li>
            <li onClick={() => props.navigateTo("/porches")}>Decks and Patios</li>
            <li onClick={() => props.navigateTo("")}>Irrigation</li>
        </ul>
      </section>
      <section className="socials">
        <h4>SOCIAL MEDIAS</h4>
        <div className="container">
            <span><FaFacebookF /></span><span><FaXTwitter /></span><span><AiFillInstagram /></span>
        </div>
      </section>
      <button className="back-to-top">BACK TO TOP <BiSolidUpArrowAlt /></button>
      <div className="ownership">
        <p className="content-p">
          Copyright 2024 | De Jesus Contracting LLC All Rights Reserved SC
          License 111111
        </p>
      </div>
    </footer>
  );
};

export default Footer;
