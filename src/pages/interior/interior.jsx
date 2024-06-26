import React from "react";
import "./interior.scss";
import drywall from "../../imgs/drywall.webp";
import interior from "../../imgs/interior.jpeg"
import interior2 from "../../imgs/interior2.jpeg"
import interiorPaint from "../../imgs/interior-paint.jpeg"

const Interior = () => {
  return (
    <div className="page" id="interior-page">
      <h1 className="sub-header">Interior Renovation Services</h1>
      <img src={interior} alt="" />
      <p className="first-paragraph content-p pad20">
      At De Jesus Contracting, we offer top-notch interior renovation services to transform your living spaces with precision and style. Specializing in flooring, drywall, and painting, our expert team ensures flawless results and meticulous attention to detail, whether refreshing a single room or completing an entire makeover.and personalized service.
      </p>
      <button className="get-started-btn">Get Started</button>
      <p className="opening lite">
          / Start to finish
        </p>
      <h2 className="sub-header expand">WE CAN HELP WITH ALL ASPECTS OF YOUR INTERIOR RENOVATION</h2>
      <span className="second-paragraph content-p">
        <p className="content-p">
          Our flooring specialists are adept at working with various materials,
          ensuring a perfect fit and finish that enhances the beauty and
          functionality of your home. From classic hardwood floors that add
          warmth and elegance to modern tile designs that offer durability and
          style, we cater to your specific preferences and needs.
        </p>

        <p className="content-p">
          In addition to flooring, our drywall experts handle everything from
          small repairs to large installations, providing seamless results that
          form the foundation for stunning interiors. We understand that drywall
          is crucial for both aesthetics and structural integrity, and we take
          pride in delivering impeccable workmanship.
        </p>

        <p className="content-p">
          Our painting services are the final touch that brings your renovation
          to life. Using high-quality paints and precise techniques, our
          painters create beautiful, enduring finishes that reflect your taste
          and enhance your home's atmosphere. Whether it's a bold new color
          scheme or a subtle refresh, we ensure every stroke contributes to a
          cohesive and inviting space.
        </p>

        <p className="content-p">
          At De Jesus Contracting, we believe that every interior renovation
          project is an opportunity to improve your home's comfort, value, and
          appeal. Our team is dedicated to exceeding your expectations through
          our comprehensive services and unwavering commitment to excellence.
        </p>
      </span>
      <img src={interior2} className="img-bg" alt="" />
      <section className="difference">
        <p className="opening">
         / The De Jesus Difference
        </p>
        <h2 className="sub-header">WHAT MAKES US DIFFERENT</h2>
        <img className="inner-image" src={interiorPaint} alt="" />
        <div className="container">
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Flooring</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Drywall</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Painting</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Interior;
