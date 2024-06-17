import React from "react";
import "./patios.scss";
import drywall from "../../imgs/drywall.webp";
import hardscape from "../../imgs/hardscape.jpeg";
import patio from "../../imgs/patio.jpeg";
import deck from "../../imgs/deck.jpeg";

const Patio = () => {
  return (
    <div className="page" id="patios-page">
      <h1 className="sub-header">Patios and Porches</h1>
      <img src={deck} alt="" />
      <p className="first-paragraph content-p">
        At De Jesus Contracting, we excel in creating beautiful and functional outdoor living spaces, including decks, patios, and porches. Our skilled craftsmen use high-quality materials and innovative designs to tailor each project to your needs and preferences. Committed to excellence and attention to detail, we ensure every structure is visually appealing, durable, and safe, providing inviting outdoor spaces for years to come.
      </p>
      <button className="get-started-btn">Get Started</button>
      <p className="opening lite">/ Relaxation Redefined</p>
      <h2 className="sub-header">FIND AN ESCAPE IN YOUR OWN BACKYARD</h2>
      <span className="second-paragraph">
        <p className="content-p">
          Our deck-building services are designed to create versatile spaces
          perfect for hosting gatherings, dining al fresco, or simply enjoying
          the outdoors. We work with a variety of materials, including
          pressure-treated wood, composite decking, and exotic hardwoods, to
          ensure your deck is not only stunning but also built to last.
        </p>

        <p className="content-p">
          When it comes to patios, we offer a range of designs from classic
          stone and brick to modern concrete and pavers. Our expert team will
          help you select the perfect materials and layout to complement your
          home's architecture and landscape, creating a seamless transition
          between indoor and outdoor living spaces.
        </p>

        <p className="content-p">
          For porches, we specialize in constructing inviting and functional
          areas that enhance your home's front or back entrance. Whether you're
          looking for a screened-in porch to enjoy the outdoors without the
          pests, or an open-air design to savor the fresh air, we customize each
          porch to meet your lifestyle and preferences.
        </p>

        <p className="content-p">
          At De Jesus Contracting, we believe that your outdoor spaces should be
          an extension of your home, providing comfort, beauty, and
          functionality. Our dedication to quality workmanship and customer
          satisfaction ensures that your new deck, patio, or porch will be a
          beloved feature of your home for years to come. Let us help you create
          the perfect outdoor retreat where you can relax, entertain, and enjoy
          the beauty of nature right at your doorstep.
        </p>
      </span>
      <img src={patio} className="img-bg" alt="" />
      <section className="difference">
        <p className="opening">/ We're here to help</p>
        <h2 className="sub-header">WHAT MAKES US DIFFERENT</h2>
        <img className="inner-image" src={hardscape} alt="" />
        <div className="container">
          <div className="bullet-container">
            <span className="bullet"></span>
            <span className="bullet-content">
              <h4>Patios</h4>
              <p>
              We offer expert patio services, creating stylish and functional outdoor retreats with high-quality materials and personalized designs.
              </p>
            </span>
          </div>
          <div className="bullet-container">
            <span className="bullet"></span>
            <span className="bullet-content">
              <h4>Porches</h4>
              <p>
              We provide custom porch services, enhancing your home's entrance with beautifully designed and durable structures tailored to your needs.
              </p>
            </span>
          </div>
          <div className="bullet-container">
            <span className="bullet"></span>
            <span className="bullet-content">
              <h4>Decks</h4>
              <p>
               We offer expert deck services, crafting versatile and durable outdoor spaces with high-quality materials and innovative designs.
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patio;
