import React from "react";
import "./hardscape.scss";
import hardscape1 from "../../imgs/hardscape1.jpeg";
import hardscape2 from "../../imgs/ardscape2.jpeg";
import hardscape3 from "../../imgs/hardscape3.jpeg"

const Hardscape = () => {
  return (
    <div className="page" id="hardscape-page">
      <h1 className="sub-header">HARDSCAPE AND CONCRETE</h1>
      <img src={hardscape1} alt="" />
      <p className="first-paragraph content-p pad20">
        At De Jesus Contracting, we provide exceptional hardscape, concrete, and
        irrigation services to enhance your outdoor spaces. Our expert team
        creates beautiful patios, walkways, and retaining walls, while
        delivering durable concrete solutions and efficient irrigation systems.
        With meticulous attention to detail and personalized service, we
        transform your outdoor areas into stunning, functional spaces.
      </p>
      <button className="get-started-btn">Get Started</button>
      <p className="opening lite">/ Make the most of your space</p>
      <h2 className="sub-header expand">
        ADD BEAUTY AND FUNCTIONALITY TO YOUR BACKYARD
      </h2>
      <span className="second-paragraph content-p">
        <p className="content-p">
          At De Jesus Contracting, we excel in transforming outdoor spaces with
          our expert concrete and hardscape services. Whether you envision a
          stylish patio, durable driveway, or intricate walkway, our skilled
          team delivers high-quality, long-lasting results tailored to your
          needs. We specialize in designing and constructing beautiful hardscape
          features, such as retaining walls, decorative stonework, and custom
          concrete projects, enhancing both the functionality and aesthetic
          appeal of your property.
        </p>

        <p className="content-p">
          Our approach begins with a comprehensive consultation to understand
          your vision and requirements. We then create detailed plans that
          incorporate your ideas, ensuring the final design aligns perfectly
          with your goals. Our concrete services include everything from
          foundational work and driveways to elegant patios and pathways, all
          crafted with precision and top-grade materials for durability and
          beauty.
        </p>

        <p className="content-p">
          In addition to concrete work, our hardscape services add a distinct
          touch to your outdoor areas. Retaining walls, decorative stone
          elements, and custom pavers are just a few of the options we offer to
          enhance your landscape. Our team’s expertise ensures that every
          element is both functional and visually appealing, creating a cohesive
          and inviting outdoor environment.
        </p>

        <p className="content-p">
          We also integrate practical solutions such as irrigation systems to
          maintain the health and beauty of your landscape. Efficient and
          tailored to your property’s needs, our irrigation services ensure that
          your hardscape and concrete features are complemented by lush,
          well-maintained greenery.
        </p>

        <p className="content-p">
          At De Jesus Contracting, our commitment to excellence and meticulous
          attention to detail ensures that your concrete and hardscape projects
          are executed with precision and care. We are dedicated to creating
          stunning, enduring outdoor environments that enhance your property's
          value and your enjoyment.{" "}
        </p>
      </span>
      <img src={hardscape3} className="img-bg" alt="" />
      <section className="difference">
        <p className="opening">
         / The De Jesus Difference
        </p>
        <h2 className="sub-header">WHAT MAKES US DIFFERENT</h2>
        <img className="inner-image" src={hardscape2} alt="" />
        <div className="container">
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Hardscape</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Landscape</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
            <div className="bullet-container">
                <span className="bullet"></span>
                <span className="bullet-content">
                    <h4>Irrigation</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae vitae omnis repellendus aliquid nesciunt quis itaque totam nihil error?</p>
                </span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Hardscape;
