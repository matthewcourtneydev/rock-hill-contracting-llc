import React from "react";
import "./about.scss";
import drywall from "../../imgs/hello.jpeg";
import patio from "../../imgs/patio.jpeg";
import hardscape from "../../imgs/hardscape.jpeg";
import logo from "../../imgs/logo.png";

import { FaHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosRibbon } from "react-icons/io";

const About = () => {
  return (
    <div className="page" id="about-page">
      <h2 className="sub-header">GET TO KNOW THE TEAM</h2>
      <img src={drywall} alt="" />
      <p className="first-paragraph content-p">
        De Jesus Contracting is a full-service construction company dedicated to
        turning your home improvement dreams into reality. Specializing in
        framing, siding, windows, roofing, patios, concrete work, hardscape,
        irrigation, drywall, painting, flooring, and porches/decks, we combine
        field expertise, professional management, and outstanding customer
        service to ensure smooth and affordable home renovations.
      </p>
      <button className="get-started-btn">Get Started</button>

      <p className="opening">/ Our Story</p>
      <p className="second-paragraph content-p">
        De Jesus Contracting was founded in response to the severe hail storms
        that recently struck Rock Hill, SC, causing extensive damage to homes
        and creating a dire need for local contractors. Recognizing the gap left
        by large, impersonal companies that couldn't offer the personalized,
        neighborly services essential for the community, Christopher De Jesus
        stepped in to fill this void. Driven by a commitment to quality and
        local expertise, De Jesus Contracting was established to provide the
        Rock Hill area with reliable, high-quality construction services. Our
        team understands the unique needs of our neighbors, ensuring each
        project receives the dedicated attention and care it deserves.
      </p>
      <img src={patio} className="about-image-2" alt="" />

      <section className="difference">
        <p className="opening">/ The De Jesus Difference</p>
        <h2 className="sub-header">
          WHAT MAKES <span>US DIFFERENT</span>
        </h2>
        <img className="inner-image" src={hardscape} alt="" />
        <div className="container">
          <div className="bullet-container">
            <span className="bullet">
              <FaHeart />
            </span>
            <span className="bullet-content">
              <h4>Family Business</h4>
              <p className="content-p">
                As a family-owned business, De Jesus Contracting upholds values
                of trust, integrity, and personalized service in every project
                we undertake.
              </p>
            </span>
          </div>
          <div className="bullet-container">
            <span className="bullet">
              <IoLocationSharp />
            </span>
            <span className="bullet-content">
              <h4>Local Business</h4>
              <p className="content-p">
                As a local business, De Jesus Contracting is deeply committed to
                serving the Rock Hill community with tailored, neighborly
                service and unmatched dedication.
              </p>
            </span>
          </div>
          <div className="bullet-container">
            <span className="bullet">
              <IoIosRibbon />
            </span>
            <span className="bullet-content">
              <h4>Quality Business</h4>
              <p className="content-p">
                De Jesus Contracting prides itself on delivering exceptional
                quality in every project, ensuring superior craftsmanship and
                lasting results.
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
