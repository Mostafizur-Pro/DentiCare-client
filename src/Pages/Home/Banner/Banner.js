import React from "react";
import chair from "../../../assets/B1.webp";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 " alt="" />
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
