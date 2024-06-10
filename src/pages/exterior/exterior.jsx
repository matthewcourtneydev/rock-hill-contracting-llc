import React from "react";
import "./exterior.scss";
import drywall from "../../imgs/drywall.webp";
import hardscape from "../../imgs/hardscape.jpeg";
import patio from "../../imgs/patio.jpeg"

const Exterior = () => {
  return (
    <div className="page" id="exterior-page">
      <h1>Exterior Renovation Services</h1>
      <img src={drywall} alt="" />
      <p className="first-paragraph">
      At De Jesus Contracting, we provide comprehensive exterior renovation services that enhance both the aesthetic appeal and structural integrity of your home. Our expertise in framing ensures a solid foundation for any addition or remodel, providing the essential support for your renovation projects. Our siding services offer a variety of durable and attractive options to protect and beautify your home’s exterior. With our roofing solutions, you can trust in our ability to deliver robust and long-lasting roofs that withstand the elements while adding to your home's curb appeal. Additionally, our window installation services focus on energy efficiency and aesthetic harmony, enhancing both the functionality and appearance of your home. At De Jesus Contracting, we are committed to delivering high-quality craftsmanship and personalized service in every aspect of exterior renovation, ensuring your home looks great and stands strong for years to come.
      </p>
      <button className="get-started-btn">Get Started</button>

      <h2>HOW WE CAN HELP</h2>
      <span className="second-paragraph">
        <p>
        Our framing specialists work with precision and attention to detail, ensuring that every structure we build is robust and reliable. Whether you're adding a new room or reinforcing an existing structure, our framing services lay a solid groundwork that guarantees durability and longevity.
        </p>

        <p>
        Our siding options range from classic vinyl and durable fiber cement to elegant wood and modern composite materials, providing you with numerous choices to suit your style and budget. Our skilled team ensures that the installation is seamless and that your home is well-protected against the elements.
        </p>

        <p>
        When it comes to roofing, we understand the critical role it plays in safeguarding your home. Our roofing experts use high-quality materials and proven techniques to deliver roofs that are not only aesthetically pleasing but also resilient against harsh weather conditions. Whether it's a simple repair or a complete roof replacement, we handle every job with the utmost care and professionalism.


        </p>

        <p>
        Our window services include everything from installing new energy-efficient windows to replacing old ones with designs that enhance your home's natural light and ventilation. We offer a variety of styles and materials to complement your home’s architecture and improve its overall energy performance.
        </p>

        <p>At De Jesus Contracting, we believe that every exterior renovation project is an opportunity to elevate your home's beauty and functionality. Our team is dedicated to exceeding your expectations through our comprehensive services and unwavering commitment to excellence. Let us help you create an exterior that not only looks stunning but also stands the test of time.</p>
      </span>
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