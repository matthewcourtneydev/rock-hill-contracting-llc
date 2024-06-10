import React from "react";
import "./patios.scss";
import drywall from "../../imgs/drywall.webp";
import hardscape from "../../imgs/hardscape.jpeg";
import patio from "../../imgs/patio.jpeg";
import deck from "../../imgs/deck.jpeg"

const Patio = () => {
  return (
    <div className="page" id="patios-page">
      <h1>Patios and Porches</h1>
      <img src={deck} alt="" />
      <p className="first-paragraph">
        At De Jesus Contracting, we excel in creating beautiful and functional
        outdoor living spaces, including decks, patios, and porches. Our team of
        skilled craftsmen brings a wealth of experience and creativity to each
        project, ensuring that your outdoor area is tailored to your specific
        needs and aesthetic preferences. Whether you envision a spacious deck
        for entertaining, a cozy patio for relaxing, or a charming porch to
        enhance your home's curb appeal, we use high-quality materials and
        innovative design solutions to bring your vision to life. Our commitment
        to excellence and attention to detail ensures that every structure we
        build is not only visually appealing but also durable and safe,
        providing you with an inviting outdoor space to enjoy for years to come.
        At De Jesus Contracting, we are dedicated to transforming your outdoor
        living dreams into reality with personalized service and exceptional
        craftsmanship.
      </p>
      <button className="get-started-btn">Get Started</button>

      <h2>HOW WE CAN HELP</h2>
      <span className="second-paragraph">
        <p>
          Our deck-building services are designed to create versatile spaces
          perfect for hosting gatherings, dining al fresco, or simply enjoying
          the outdoors. We work with a variety of materials, including
          pressure-treated wood, composite decking, and exotic hardwoods, to
          ensure your deck is not only stunning but also built to last.
        </p>

        <p>
          When it comes to patios, we offer a range of designs from classic
          stone and brick to modern concrete and pavers. Our expert team will
          help you select the perfect materials and layout to complement your
          home's architecture and landscape, creating a seamless transition
          between indoor and outdoor living spaces.
        </p>

        <p>
          For porches, we specialize in constructing inviting and functional
          areas that enhance your home's front or back entrance. Whether you're
          looking for a screened-in porch to enjoy the outdoors without the
          pests, or an open-air design to savor the fresh air, we customize each
          porch to meet your lifestyle and preferences.
        </p>

        <p>
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
        <p className="opening">The De Jesus Difference</p>
        <h2>WHAT MAKES US DIFFERENT</h2>
        <img className="inner-image" src={hardscape} alt="" />
        <div className="container">
          <div className="bullet-container">
            <span className="bullet"></span>
            <span className="bullet-content">
              <h4>Patios</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam molestiae vitae omnis repellendus aliquid nesciunt
                quis itaque totam nihil error?
              </p>
            </span>
          </div>
          <div className="bullet-container">
            <span className="bullet"></span>
            <span className="bullet-content">
              <h4>Porches</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam molestiae vitae omnis repellendus aliquid nesciunt
                quis itaque totam nihil error?
              </p>
            </span>
          </div>
          <div className="bullet-container">
            <span className="bullet"></span>
            <span className="bullet-content">
              <h4>Decks</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam molestiae vitae omnis repellendus aliquid nesciunt
                quis itaque totam nihil error?
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patio;
