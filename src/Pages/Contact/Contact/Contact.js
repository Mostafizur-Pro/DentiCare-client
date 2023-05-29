import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import {
  FaAngleRight,
  FaGofore,
  FaGooglePlus,
  FaGooglePlusSquare,
  FaHome,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="bg-primary flex justify-between items-center text-white px-10">
        <h1 className="text-4xl font-bold">C o n t a c t</h1>
        <p className="flex items-center gap-2 text-xl py-10">
          {" "}
          <FaHome /> Home <FaAngleRight /> Contact
        </p>
      </div>
      <div className="text-center my-5">
        <p className="text-rose-300 font-bold text-lg">
          We love would love to hear from you
        </p>
        <h1 className="text-3xl font-bold mt-5">Get In Touch With Us</h1>
        <p className="my-3">
          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
          libero, sit amet adipiscing sem neque sed ipsum. <br /> Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus.
        </p>
      </div>
      <section className="flex justify-between items-center my-20 mx-10">
        <div className="items-center text-center  ">
          <p className="text-primary text-5xl justify-center flex">
            <FaMapMarkerAlt />
          </p>
          <h3 className="text-primary text-2xl font-bold my-3">ADDRESS</h3>
          <p className="text-xl">Dhamrai, Dhaka, Bangladesh</p>
        </div>
        <div className="items-center text-center  ">
          <p className="text-primary text-5xl justify-center flex">
            {" "}
            <FaRegClock />
          </p>

          <h3 className="text-primary text-2xl font-bold my-3">
            OPPENING HOURS
          </h3>
          <p className="text-xl">Monday-Sunday : 8:00 AM - 5:00 PM</p>
        </div>
        <div className="items-center text-center  ">
          <p className="text-primary text-5xl justify-center flex">
            {" "}
            <FaPhoneAlt />
          </p>

          <h3 className="text-primary text-2xl font-bold my-3"> PHONE</h3>
          <p className="text-xl">+880 1950 165 017 </p>
        </div>
        <div className="items-center text-center  ">
          <p className="text-primary text-5xl justify-center flex">
            <FaGofore />
          </p>

          <h3 className="text-primary text-2xl font-bold my-3">EMAIL</h3>

          <p className="text-xl">mostafizur0195@gmail.com</p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-10 my-10">
          <div className="grid-cols-1">
            <h1 className="text-3xl font-bold">Leave us a Message</h1>
            <p>
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem.
            </p>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input file-input-bordered block w-full mt-5"
                  />
                  <input
                    type="email"
                    placeholder="Emal"
                    className="input file-input-bordered block w-full mt-5"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input file-input-bordered block w-full mt-5"
                  />
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="input file-input-bordered block h-24 w-full mt-5"
                  />
                  <div className="form-control mt-6">
                    <button className="btn capitalize text-xl">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="grid-cols-1">
            <h1 className="text-3xl font-bold">Visit our Office</h1>
            <p>
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.97395199123676!2d90.21942467180976!3d23.904393041162276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4f062ec2215fdc2!2zMjPCsDU0JzE1LjUiTiA5MMKwMTMnMTAuMyJF!5e0!3m2!1sen!2sbd!4v1674399180141!5m2!1sen!2sbd"
                width="600"
                height="450"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
