import React from "react";

import classes from "./Footer.module.css";
import Form from "../NavBar/Form";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className="row" id={classes.row}>
          <div className="col-4">
            <img src="./images/footer-logo.png" alt="logo" />
          </div>
          <div className="col-6">
            <h4>NEW TO TFS?</h4>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <Form
              className={classes.input}
              placeholder="Enter E-mail Address"
              input="Subscribe"
            />
            <p style={{ color: "#131313", marginTop: "1rem" }}>
              We’ll never share your email address with a third-party.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ marginTop: "4rem", marginLeft: "5rem" }}>
          <div className="col">
            <section className={classes.section}>
              <h5>TFS INFORMATION</h5>
              <ul className={classes.ul}>
                <li>About us</li>
                <li>contact us</li>
                <li>Wishlist</li>
                <li>Return & Refund Policy</li>
                <li>Shipping Policy</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </section>
          </div>
          <div className="col">
            <section className={classes.section}>
              <h5>TFS INFORMATION</h5>
              <ul className={classes.ul}>
                <li>About us</li>
                <li>contact us</li>
                <li>Wishlist</li>
                <li>Return & Refund Policy</li>
                <li>Shipping Policy</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </section>
          </div>
          <div className="col">
            <section className={classes.section}>
              <h5>TFS INFORMATION</h5>
              <ul className={classes.ul}>
                <li>About us</li>
                <li>contact us</li>
                <li>Wishlist</li>
                <li>Return & Refund Policy</li>
                <li>Shipping Policy</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
