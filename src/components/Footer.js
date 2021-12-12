import React from "react";

import "./Footer.scss";

import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io5";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_hours">
          <h5>Wednesday - Sunday</h5>
          <p>2PM - 2AM</p>
        </div>
        <div className="footer_address">
          <h5>Visit us</h5>
          <p>430 Smoke St. Smoking Town, Texas</p>
        </div>
        <div className="footer_contact">
          <h5>Talk to us</h5>
          <p>eat@smokinghouse.com</p>
          <p>(643) 348-6544</p>
        </div>
        <div className="footer_socialLinks">
          <h5>Follow us</h5>
          <ul>
            <li className="twitter">
              <IoLogoTwitter />
            </li>
            <li className="instagram">
              <IoLogoInstagram />
            </li>
            <li className="facebook">
              <IoLogoFacebook />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
