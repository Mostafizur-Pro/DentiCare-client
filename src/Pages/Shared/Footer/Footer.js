import React from "react";

import {
  FaAngleRight,
  FaClock,
  FaFacebookSquare,
  FaGofore,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 bg-neutral text-neutral-content">
      <div className="footer">
        <section>
          <div className="footer-title   ">
            <h1 className="text-white text-2xl"> About Us</h1>
          </div>

          <div className=" grid grid-cols-1 divide-y-2  divide-gray-600">
            <div className="  my-2 text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaMapMarkerAlt />
              </span>
              Dhamrai, Dhaka, Bangladesh
            </div>
            <div className=" my-2 pt-2 text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaPhoneAlt />
              </span>
              +88 019 5016 5017
            </div>
            <div className=" my-2 pt-2 text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaGofore />
              </span>
              mostafizur0195@gmail.com
            </div>
          </div>
          <div className="flex text-primary text-4xl gap-5 mt-10 ">
            <a
              className="hover:text-blue-400"
              href="https://www.facebook.com/mostafizur.proo/"
            >
              <FaFacebookSquare />
            </a>
            <a className="hover:text-blue-400" href="">
              <FaTwitterSquare />
            </a>

            <a
              className="hover:text-blue-400"
              href="https://www.linkedin.com/in/mostafizur-pro/"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>
        <section>
          <div className="footer-title   ">
            <h1 className="text-white text-2xl"> Services</h1>
          </div>
          <div className="">
            <p className=" mb-3  text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaAngleRight />
              </span>
              Teeth Orthodontics
            </p>
            <p className=" mb-3  text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaAngleRight />
              </span>
              Cosmetic Dentistry
            </p>
            <p className=" mb-3  text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaAngleRight />
              </span>
              Teeth Cleaning
            </p>
            <p className=" mb-3  text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaAngleRight />
              </span>
              Cavity Protection
            </p>
            <p className=" mb-3  text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaAngleRight />
              </span>
              Pediatric Dental
            </p>
            <p className=" mb-3  text-xl flex gap-3 items-center hover:text-primary">
              <span className="text-primary text-3xl">
                <FaAngleRight />
              </span>
              Oral Surgery
            </p>
          </div>
        </section>
        <section>
          <div className="footer-title   ">
            <h1 className="text-white text-2xl"> Opening Hours</h1>
          </div>
          <div className="grid grid-cols-1 divide-y divide-gray-600">
            <div className=" mb-3  text-xl flex gap-3 items-center">
              <span className="text-primary text-2xl">
                <FaClock />
              </span>
              <p className="grid grid-cols-2 gap-2 ">
                <span>Monday</span> <span>8:00 AM - 5:00 PM</span>
              </p>
            </div>
            <div className=" my-2 pt-2 text-xl flex gap-3 items-center">
              <span className="text-primary text-2xl">
                <FaClock />
              </span>
              <p className="grid grid-cols-2 gap-2 ">
                <span>Tuesday</span> <span>8:00 AM - 5:00 PM</span>
              </p>
            </div>
            <div className=" my-2 pt-2  text-xl flex gap-3 items-center">
              <span className="text-primary text-2xl">
                <FaClock />
              </span>
              <p className="grid grid-cols-2 gap-2 ">
                <span>Wednesday</span> <span>8:00 AM - 5:00 PM</span>
              </p>
            </div>
            <div className=" my-2 pt-2  text-xl flex gap-3 items-center">
              <span className="text-primary text-2xl">
                <FaClock />
              </span>
              <p className="grid grid-cols-2 gap-2 ">
                <span>Thursday</span> <span>8:00 AM - 5:00 PM</span>
              </p>
            </div>
            <div className=" my-2 pt-2  text-xl flex gap-3 items-center">
              <span className="text-primary text-2xl">
                <FaClock />
              </span>
              <p className="grid grid-cols-2 gap-2 ">
                <span>Friday</span> <span>8:00 AM - 5:00 PM</span>
              </p>
            </div>
            <div className=" my-2 pt-2 text-xl flex gap-3 items-center">
              <span className="text-primary text-2xl">
                <FaClock />
              </span>
              <p className="grid grid-cols-2 gap-2 ">
                <span>Saturday</span> <span>8:00 AM - 5:00 PM</span>
              </p>
            </div>
            <div className=" my-2 pt-2  text-xl flex gap-3 items-center">
              <span className="text-primary text-2xl">
                <FaClock />
              </span>
              <p className="grid grid-cols-2 gap-2 ">
                <span>Sunday</span> <span>8:00 AM - 5:00 PM</span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center mt-10">
        <p>Copyright © 2022 - All right reserved by DentiCare </p>
      </div>
    </footer>
  );
};

export default Footer;
