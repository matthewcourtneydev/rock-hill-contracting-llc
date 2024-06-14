import { useState, React } from "react";
import "./home-carousel.scss";
import lumber from "../../imgs/lumber.webp";
import exterior from"../../imgs/exterior.jpeg"
import roofing from "../../imgs/roofing.webp"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const HomeCarousel = () => {
    const [currentIteration, setCurrentIteration] = useState(0);
    const slides = [
        {
            "p": "At De Jesus Contracting, we are dedicated to delivering unparalleled craftsmanship and service excellence in every project we undertake. Specializing in both interior and exterior home remodeling, our small yet highly skilled team prides itself on precision, integrity, and a commitment to exceeding client expectations. Serving the Rock Hill, SC community, we bring a proven track record of transforming homes with meticulous attention to detail and unwavering dedication to quality. Your vision is our mission, and we strive to build lasting relationships through transparency, reliability, and superior workmanship.",
            "img": "../../imgs/exterior.jpeg"
        },
        {
            "p": "At De Jesus Contracting, we specialize in handling the small yet crucial tasks that general contractors often upcharge by hiring subcontractors. By directly employing skilled tradespeople within our team, we eliminate the middleman, ensuring that your project benefits from both consistent quality and cost efficiency. This streamlined approach allows us to offer competitive pricing without compromising on the excellence and precision we are known for. Choosing De Jesus Contracting means you gain direct access to top-tier craftsmanship, transparent communication, and significant savings, making us the ideal partner for all your home remodeling needs in Rock Hill, SC.",
            "img": "../../imgs/roofing.webp"
        },
        {
            "p": "At De Jesus Contracting in Rock Hill, SC, we believe our company is the perfect match for your home renovation project because we blend the expertise of a general contractor with the comprehensive capabilities of a construction company. Our team is dedicated to delivering exceptional results, maintaining transparency throughout the process, and transforming your vision into reality with the highest standards of quality. With us, you receive the full spectrum of services under one roof, ensuring a seamless and efficient remodeling experience.",
            "img": "../../imgs/lumber.webp"
        }
    ]

    function handleInc() {
        if (currentIteration < 2) {
            setCurrentIteration((prev) => prev + 1)
        }
    }

    function handleDec() {
        if (currentIteration > 0) {
            setCurrentIteration((prev) => prev - 1)
        }
    }
  return (
    <section className="who-we-are">
      <p className="opening">/ What Kind of Contractor We Are</p>
      <h2 className="sub-header">HIGH QUALITY <span className="second">RENOVATION WORK</span> <span className="third"> DONE FAST</span></h2>
      <p className="content-p">
      {slides[currentIteration].p}
      </p>
      <div className="nav-carousel">
<FaArrowLeftLong onClick={() => handleDec()}/>
    <span>{currentIteration + 1} / 3</span>
<FaArrowRightLong onClick={() => handleInc()}/>
      </div>
      <img className="carousel-img" src={slides[currentIteration].img} alt="img" />
    </section>
  );
};

export default HomeCarousel;
