import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      // style={{
      //   background: `url(${footer})`,
      //   backgroundSize: "cover",
      // }}
      className="p-10 bg-neutral text-neutral-content"
    >
      {/* <footer className="footer p-10 bg-neutral text-neutral-content"></footer> */}
      <div className="footer">
        <div>
          <span className="footer-title text-2xl border-b-2">About Us</span>

          <p to="/" className="link link-hover">
            Dhamrai, Dhaka, Bangladesh
          </p>
          <p to="/" className="link link-hover">
            +88 019 5016 5017
          </p>

          <p to="/" className="link link-hover">
            mostafizur0195@gmail.com
          </p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="text-center mt-32">
        <p>Copyright © 2022 - All right reserved by DentiCare Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
