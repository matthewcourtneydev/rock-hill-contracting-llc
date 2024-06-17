import React from "react";
import "./exterior.scss";
import exterior from "../../imgs/exterior-home.jpeg";
import exterior2 from "../../imgs/exterior-house2.webp"
import exterior3 from "../../imgs/exterior3.webp"

const Exterior = () => {
  return (
    <div className="page" id="exterior-page">
      <h1 className="sub-header">Exterior Renovation Services</h1>
      <img src={exterior} alt="" />
      <p className="first-paragraph content-p">
      At De Jesus Contracting, we provide comprehensive exterior renovation services to enhance your home's aesthetic appeal and structural integrity. Our expertise includes framing, siding, roofing, and window installation, ensuring durable and attractive results. Committed to high-quality craftsmanship and personalized service, we ensure your home looks great and stands strong for years to come.
      </p>
      <button className="get-started-btn">Get Started</button>
      <p className="opening lite">
         / Welcome to your renewed home
        </p>
      <h2 className="sub-header">FIRST IMPRESSIONS ARE EVERYTHING</h2>
      <span className="second-paragraph">
        <p className="content-p">
        Our framing specialists work with precision and attention to detail, ensuring that every structure we build is robust and reliable. Whether you're adding a new room or reinforcing an existing structure, our framing services lay a solid groundwork that guarantees durability and longevity.
        </p>

        <p className="content-p">
        Our siding options range from classic vinyl and durable fiber cement to elegant wood and modern composite materials, providing you with numerous choices to suit your style and budget. Our skilled team ensures that the installation is seamless and that your home is well-protected against the elements.
        </p>

        <p className="content-p">
        When it comes to roofing, we understand the critical role it plays in safeguarding your home. Our roofing experts use high-quality materials and proven techniques to deliver roofs that are not only aesthetically pleasing but also resilient against harsh weather conditions. Whether it's a simple repair or a complete roof replacement, we handle every job with the utmost care and professionalism.


        </p>

        <p className="content-p">
        Our window services include everything from installing new energy-efficient windows to replacing old ones with designs that enhance your home's natural light and ventilation. We offer a variety of styles and materials to complement your home’s architecture and improve its overall energy performance.
        </p>

        <p className="content-p">At De Jesus Contracting, we believe that every exterior renovation project is an opportunity to elevate your home's beauty and functionality. Our team is dedicated to exceeding your expectations through our comprehensive services and unwavering commitment to excellence. Let us help you create an exterior that not only looks stunning but also stands the test of time.</p>
      </span>
      <img src={exterior2} className="img-bg" alt="" />
      <section className="difference">
        <p className="opening">
          / We're here to help
        </p>
        <h2 className="sub-header">WHAT WE CAN DO FOR YOU</h2>
        <img className="inner-image" src={exterior3} alt="" />
        <div className="container">
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Framing</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Siding</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Roofing</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Windows</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Exterior;