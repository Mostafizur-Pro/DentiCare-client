import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="bg-blue-500 text-white text-center py-10">
          <h1 className="text-5xl font-bold my-5">
            Make your dream smile a reality!
          </h1>
          <p className="text-2xl my-4">
            Call us or book your appointment today
          </p>
          <Link to="/appointment">
            <button className="btn  btn-info bg-white  text-xl text-gray-900 capitalize">
              Booking Appointment
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
