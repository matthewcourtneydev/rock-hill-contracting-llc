import React from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { PiSolarRoof } from "react-icons/pi";
import { GrPaint } from "react-icons/gr";
import { MdDeck } from "react-icons/md";
import { GiConcreteBag } from "react-icons/gi";
import { PiHandshake } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
import HomeCarousel from "../../components/home-carousel/home-carousel";
import roofing from "../../imgs/roofing.webp";
import exterior from "../../imgs/exterior.jpeg";
import { TbTargetArrow } from "react-icons/tb";

import patio from "../../imgs/patio.jpeg";
import drywallTeam from "../../imgs/drywall-team.jpeg"
import NavbarLg from "../../components/navbar-lg/navbar-lg";

const Home = (props) => {
  const navigate = useNavigate();

  function navigateTo(page) {
    navigate(page)
  }
  return (
    <div className="page" id="home-page">
      <header>
        <h1>
          <span>PRECISION</span>
          <span>INTEGRITY</span>
          <span>EXCELLENCE</span>
        </h1>
        <p className="header-p">
          / a local family owned contractor here to serve the community.
        </p>
        <button className="help">SEE HOW WE CAN HELP</button>
        <img src={roofing} alt="" />
      </header>
      <HomeCarousel />
      <section className="get-started">
        <p className="opening">/ Dream to reality</p>
        <h2 className="sub-header">READY TO BEGIN<span className="second"> A NEW REMODELING</span> <span className="third">PROJECT?</span></h2>
        <p className="content-p">
          Ready to start your next home improvement project? Contact De Jesus
          Contracting today to schedule a consultation. Our team is eager to
          bring your vision to life with our expert craftsmanship and
          personalized service. Let's create something amazing together!
        </p>
        <button
          className="get-started-btn"
          onClick={() => navigate("/contact")}
        >
          GET STARTED
        </button>
        <img src={patio} className="img-bg" alt="" />
      </section>
      <section className="services">
        <p className="opening">/ What can we do for you?</p>
        <h2 className="sub-header">OUR SERVICES</h2>
        <div className="button-container">
          <div className="service-btn" onClick={() => navigateTo("/exterior")}>
            <div className="img">
              <span>
                <PiSolarRoof />
              </span>
            </div>
            <h3>ROOFING, SIDING, FRAMING, WINDOWS</h3>
          </div>
          <div className="service-btn" onClick={() => navigateTo("/interior")}>
            <div className="img">
              <span>
                <GrPaint />
              </span>
            </div>
            <h3>FLOORING, DRYWALL, PAINTING</h3>
          </div>
          <div className="service-btn" onClick={() => navigateTo("/patios")}>
            <div className="img">
              <span>
                <MdDeck />
              </span>
            </div>
            <h3>PORCHES, PATIOS, DECKS</h3>
          </div>
          <div className="service-btn" onClick={() => navigateTo("/")}>
            <div className="img">
              <span>
                <GiConcreteBag />
              </span>
            </div>
            <h3>IRRIGATION, HARDSCAPE, CONCRETE</h3>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <p className="opening">/ Reviews</p>
        <h2 className="sub-header">WHAT THEY'RE SAYING</h2>
      </section>
      <section className="mission">
        <p className="opening">/ Our Commitment</p>
        <h2 className="sub-header">WHAT SETS US APART</h2>
        <div className="button-container no-flex">
        <img src={drywallTeam} alt="drywall team" className="mission-img" />
          <div className="mission-btn">
            <div className="img">
              <span>
                <TbTargetArrow />
              </span>
            </div>
            <h3>PRECISION</h3>
            <p className="content-p">
              At De Jesus Contracting, our commitment to precision ensures every
              project is executed with meticulous attention to detail and
              superior craftsmanship. We strive for perfection in every aspect,
              guaranteeing high-quality results that exceed your expectations.
            </p>
          </div>

          <div className="mission-btn">
            <div className="img">
              <span>
                <PiHandshake />
              </span>
            </div>
            <h3>INTEGRITY</h3>
            <p className="content-p">
              At De Jesus Contracting, our commitment to integrity means we
              conduct every project with honesty, transparency, and respect. We
              build trust with our clients by delivering on our promises and
              maintaining the highest ethical standards in all our work.
            </p>
          </div>

          <div className="mission-btn">
            <div className="img">
              <span>
                <TbAward />
              </span>
            </div>
            <h3>EXCELLENCE</h3>
            <p className="content-p">
            At De Jesus Contracting, our commitment to excellence drives us to deliver superior craftsmanship and outstanding service in every project. We continually strive to exceed client expectations, ensuring exceptional results that stand the test of time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
