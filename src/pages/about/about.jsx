import React from "react";
import "./about.scss";
import drywall from "../../imgs/drywall.webp";
import patio from "../../imgs/patio.jpeg";
import hardscape from "../../imgs/hardscape.jpeg"

const About = () => {
  return (
    <div className="page" id="about-page">
      <h1>About Our Team</h1>
      <img src={drywall} alt="" />
      <p className="first-paragraph">
        At De Jesus Contracting, we pride ourselves on delivering exceptional
        craftsmanship and comprehensive construction services to the Rock Hill,
        SC community. Led by owner Christopher De Jesus, our team specializes in
        a wide range of services, including framing, siding, windows, roofing,
        patios, concrete work, hardscape, irrigation, drywall, painting,
        flooring, and porches/decks. Our skilled professionals are dedicated to
        providing high-quality workmanship and personalized service, ensuring
        every project is completed to the highest standards. Whether it's a
        small home improvement or a large-scale renovation, De Jesus Contracting
        is committed to bringing your vision to life with precision and care.
      </p>
      <button className="get-started-btn">Get Started</button>

      <h2>Our Story</h2>
      <p className="second-paragraph">
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
      <img src={patio} className="img-bg" alt="" />

      <section className="difference">
        <p className="opening">
          The De Jesus Difference
        </p>
        <h2>WHAT MAKES US DIFFERENT</h2>
        <img className="inner-image" src={hardscape} alt="" />
        <div className="container">
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Family Business</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Family Business</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Family Business</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
