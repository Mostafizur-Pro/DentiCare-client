import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Relieving Your Dental Distress</h1>
          <p className="py-6">
            Prioritize your Dental hygiene. Get Free consultation upon
            treatment.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
