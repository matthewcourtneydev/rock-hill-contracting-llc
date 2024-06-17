import React from 'react';
import "./testimonials.scss";
import happy3 from "../../imgs/happy3.jpeg"
import happy4 from "../../imgs/happy1.jpeg"

const Testimonials = () => {
    return (
        <div className="page" id="testimonials-page">
            <h1 className="sub-header">TESTIMONIALS</h1>
<div className="container">
<img src={happy3} className="test-img" alt="" />
<div className="right">
            <p className="opening">/ General Remodel, Charlotte NC</p>
            <h3 className="sub-header">The Courtney Family</h3>
            <p className="content-p">Our family recently worked with De Jesus Contracting for a comprehensive home renovation, and we are absolutely thrilled with the outcome. From the initial consultation to the final touches, their team demonstrated remarkable professionalism, expertise, and dedication to our project. They handled everything from framing and siding to roofing and window installations with precision and care, ensuring every aspect of our home was improved and enhanced.</p>
            <p className="content-p">One of the highlights was the transformation of our outdoor spaces. The team created a beautiful deck, cozy patio, and charming porch that perfectly match our aesthetic preferences and functional needs. The quality of the materials used and the attention to detail in the design and construction were truly impressive. These new spaces have become the heart of our home, where we enjoy countless family gatherings and relaxing evenings.</p>
            <p className="content-p">Inside, they installed new flooring, flawless drywall, and expertly painted each room, giving our home a fresh and modern look. Their commitment to excellence and personalized service was evident throughout the entire process. They listened to our ideas, offered valuable suggestions, and ensured that our vision was brought to life with exceptional craftsmanship.</p>
            <p className="content-p">De Jesus Contracting made the entire renovation experience smooth and stress-free. Their friendly and reliable team always kept us informed, completed the work on time, and stayed within our budget. We highly recommend De Jesus Contracting to anyone looking for a trustworthy and talented construction company. They have truly turned our house into a dream home, and we couldn’t be happier with the results.</p>
            </div>
</div>
<div className="container">
<img src={happy4} className="test-img" alt="" />
<div className="right">
            <p className="opening">/ Roofing, Rock Hill SC</p>
            <h3 className="sub-header">The Smith Family</h3>
            <p className="content-p">Our family recently had the pleasure of working with De Jesus Contracting to repair our roof in Rock Hill, SC, after it was severely damaged by a recent hail storm. From the moment we contacted them, their team was responsive, professional, and empathetic to our situation. They quickly assessed the damage and provided a clear and fair estimate for the repairs.</p>
            <p className="content-p">The quality of their work was outstanding. They used top-notch materials and demonstrated exceptional craftsmanship throughout the entire process. The team was punctual, respectful, and diligent, ensuring that the repair was completed efficiently and to the highest standard. They also took the time to explain each step of the process, giving us peace of mind that our home was in good hands.</p>
            <p className="content-p">What truly set De Jesus Contracting apart was their commitment to customer service. They understood the stress and urgency of our situation and went above and beyond to make the repair process as smooth and hassle-free as possible. Their friendly and approachable demeanor made it easy to communicate our needs and concerns.</p>
            <p className="content-p">Thanks to De Jesus Contracting, our roof is now as good as new, providing our family with the safety and protection we need. We highly recommend their services to anyone in need of roof repairs or any other contracting work. They have earned our trust and gratitude for their exceptional work and outstanding customer care.</p>
            </div>
</div>
        </div>
    );
}

export default Testimonials;
