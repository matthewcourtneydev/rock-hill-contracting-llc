import React from "react";
import  "./footer.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidUpArrowAlt } from "react-icons/bi";



const Footer = () => {
  return (
    <footer id="footer">
      <div className="logo">
        <h3>LOGO</h3>
      </div>
      <section className="contact">
        <h4>GET IN TOUCH</h4>
        <div className="container">
          <span className="icon">
            <FaLocationDot />
          </span>
          <p>123 Main St Rock Hill, SC 12345</p>
        </div>
        <div className="container">
          <span className="icon">
            <FaPhoneAlt />
          </span>
          <p>(704) 123-1111</p>
        </div>
        <div className="container">
          <span className="icon">
            <MdEmail />
          </span>
          <p>email@gmail.com</p>
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
            <li><a href="#">Exterior</a></li>
            <li><a href="#">Interior</a></li>
            <li><a href="#">Decks and Patios</a></li>
            <li><a href="#">Irrigation</a></li>
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
        <p>
          Copyright 2024 | De Jesus Contracting LLC All Rights Reserved SC
          License 111111
        </p>
      </div>
    </footer>
  );
};

export default Footer;
