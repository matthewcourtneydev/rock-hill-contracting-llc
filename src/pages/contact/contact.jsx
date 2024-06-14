import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, toggleEmail] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_8dlalvd", "template_7h3bqli", form.current, {
        publicKey: "aPDvLUxmq4l6nCZmW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    toggleEmail((prev) => !prev);
  }

  return (
    <div className="page" id="contact-page">
      <h1>FREE ESTIMATE</h1>
      {isEmailSent ? <>
      <section className="email-sent">
        <h2>Thank you so much for reaching out! One of our team members will reach out as soon as possible! </h2>
      </section>
      </> : <>
      <form onSubmit={handleSubmit} ref={form} className="contact-page-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="first" placeholder="First" />
        <input type="text" name="last" placeholder="Last" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <label htmlFor="phone">Phone</label>
        <input name="phone" type="phone" id="phone" />
        <label htmlFor="address">Address</label>
        <input name="address" type="text" id="address" placeholder="Address" />
        <input name="city" type="text" id="city" placeholder="City" />
        <select name="state" id="state">
          <option value="NC">NC</option>
          <option value="SC">SC</option>
        </select>
        <input type="text" name="zip" id="zip" placeholder="Zip Code" />
        <label htmlFor="interest">I'm interested in:</label>

        <section>
          <span>
            <input type="radio" name="interior" id="interior" />
            <label htmlFor="interior">Interior</label>
          </span>
          <span>
            <input type="radio" name="exterior" id="exterior" />
            <label htmlFor="exterior">Exterior</label>
          </span>
          <span>
            <input type="radio" name="patio" id="patio" />
            <label htmlFor="patio">Patio</label>
          </span>
        </section>

        <label htmlFor="comments">Your Comments</label>
        <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
        <button className="submit-button">SUBMIT</button>
      </form>
      </>}
    </div>
  );
};

export default Contact;
