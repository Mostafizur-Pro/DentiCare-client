import React from "react";
import { Link } from "react-router-dom";

import {
  FaAngleRight,
  FaBeer,
  FaClock,
  FaGooglePlusSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
          <div className="footer-title   ">
            <h1 className="text-white text-2xl"> About Us</h1>
          </div>

          <p className="  mb-3 text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaMapMarkerAlt />
            </span>
            Dhamrai, Dhaka, Bangladesh
          </p>
          <p className=" mb-3 text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaMapMarkerAlt />
            </span>
            +88 019 5016 5017
          </p>
          <p className=" mb-3  text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaGooglePlusSquare />
            </span>
            mostafizur0195@gmail.com
          </p>
        </div>
        <div>
          <div className="footer-title   ">
            <h1 className="text-white text-2xl"> Services</h1>
          </div>
          <p className=" mb-3  text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaAngleRight />
            </span>
            Teeth Orthodontics
          </p>
          <p className=" mb-3  text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaAngleRight />
            </span>
            Cosmetic Dentistry
          </p>
          <p className=" mb-3  text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaAngleRight />
            </span>
            Teeth Cleaning
          </p>
          <p className=" mb-3  text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaAngleRight />
            </span>
            Cavity Protection
          </p>
          <p className=" mb-3  text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaAngleRight />
            </span>
            Pediatric Dental
          </p>
          <p className=" mb-3  text-xl flex gap-3 items-center hover:text-red-600">
            <span className="text-rose-600 text-3xl">
              <FaAngleRight />
            </span>
            Oral Surgery
          </p>
        </div>
        <section>
          <div className="footer-title   ">
            <h1 className="text-white text-2xl"> Opening Hours</h1>
          </div>
          <div className=" mb-3  text-xl flex gap-3 items-center">
            <span className="text-rose-600 text-2xl">
              <FaClock />
            </span>
            <p className="grid grid-cols-2 gap-4 ">
              <span>Monday</span> <span>8:00 AM - 5:00 PM</span>
            </p>
          </div>
          <div className=" mb-3  text-xl flex gap-3 items-center">
            <span className="text-rose-600 text-2xl">
              <FaClock />
            </span>
            <p className="grid grid-cols-2 gap-4 ">
              <span>Tuesday</span> <span>8:00 AM - 5:00 PM</span>
            </p>
          </div>
          <div className=" mb-3  text-xl flex gap-3 items-center">
            <span className="text-rose-600 text-2xl">
              <FaClock />
            </span>
            <p className="grid grid-cols-2 gap-4 ">
              <span>Wednesday</span> <span>8:00 AM - 5:00 PM</span>
            </p>
          </div>
          <div className=" mb-3  text-xl flex gap-3 items-center">
            <span className="text-rose-600 text-2xl">
              <FaClock />
            </span>
            <p className="grid grid-cols-2 gap-4 ">
              <span>Thursday</span> <span>8:00 AM - 5:00 PM</span>
            </p>
          </div>
          <div className=" mb-3  text-xl flex gap-3 items-center">
            <span className="text-rose-600 text-2xl">
              <FaClock />
            </span>
            <p className="grid grid-cols-2 gap-4 ">
              <span>Friday</span> <span>8:00 AM - 5:00 PM</span>
            </p>
          </div>
          <div className=" mb-3  text-xl flex gap-3 items-center">
            <span className="text-rose-600 text-2xl">
              <FaClock />
            </span>
            <p className="grid grid-cols-2 gap-4 ">
              <span>Saturday</span> <span>8:00 AM - 5:00 PM</span>
            </p>
          </div>
          <div className=" mb-3  text-xl flex gap-3 items-center">
            <span className="text-rose-600 text-2xl">
              <FaClock />
            </span>
            <p className="grid grid-cols-2 gap-4 ">
              <span>Sunday</span> <span>8:00 AM - 5:00 PM</span>
            </p>
          </div>
        </section>
      </div>
      <div className="text-center mt-32">
        <p>Copyright © 2022 - All right reserved by DentiCare </p>
      </div>
    </footer>
  );
};

export default Footer;
