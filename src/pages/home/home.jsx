import React from 'react';
import "./home.scss"
import HomeCarousel from '../../components/home-carousel/home-carousel';
import roofing from "../../imgs/roofing.webp"
import exterior from "../../imgs/exterior.jpeg"

const Home = () => {
    return (
        <div className="page" id="home-page">
            <header>
                <h1>
                    <span>Precision,</span>
                <span>Integrity,</span>
                <span>Excellence</span>
                </h1>
                <p>At De Jesus Contracting, our mission is to deliver precision, integrity, and excellence in every job, ensuring unmatched quality and customer satisfaction in all our projects.</p>
                <button className="help">SEE HOW WE CAN HELP</button>
            </header>
            <img src={roofing} alt="" />
        <HomeCarousel />
            <section className="get-started">
                <p className="opening">Make Your Dream Home a Reality with your Local Neighborhood Contractor</p>
                <h2>Ready to begin a Project?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facere magni molestias nesciunt commodi cumque assumenda earum dicta, nemo quae ipsam suscipit magnam asperiores quis ducimus non est, nostrum corporis incidunt, architecto minus laudantium ullam?</p>
                <button className="get-started-btn">Get Started</button>
                <img src={exterior} alt="" />
            </section>
            <section className="services">
            <p className="opening">What can we do for you?</p>
                <h2>Our Services</h2>
                <div className="button-container">
                    <div className="service-btn">
                        <div className="img"></div>
                        <h3>Roofing, Siding, Framing, Windows</h3>
                    </div>
                    <div className="service-btn">
                        <div className="img"></div>
                        <h3>Flooring, Drywall, Painting</h3>
                    </div>
                    <div className="service-btn">
                        <div className="img"></div>
                        <h3>Porches, Decks, Patios</h3>
                    </div>
                    <div className="service-btn">
                        <div className="img"></div>
                        <h3>Irrigation, Hardscape, Concrete</h3>
                    </div>
                </div>
            </section>
            <section className="testimonials">
            <p className="opening">Reviews</p>
                <h2>What They're Saying</h2>
            </section>
            <section className="mission">
            <p className="opening">Our Commitment</p>
                <h2>What Sets us Apart</h2>
                <div className="button-container">
                    <div className="mission-btn">
                        <div className="img"></div>
                        <h3>Precision</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet ipsam soluta. Similique natus rerum ipsum dolorem delectus repudiandae iusto!</p>
                    <div className="mission-btn">
                        <div className="img"></div>
                        <h3>Integrity</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet ipsam soluta. Similique natus rerum ipsum dolorem delectus repudiandae iusto!</p>
                    <div className="mission-btn">
                        <div className="img"></div>
                        <h3>Excellence</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eveniet ipsam soluta. Similique natus rerum ipsum dolorem delectus repudiandae iusto!</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
