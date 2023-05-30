import React from "react";
import image01 from "../../../assets/about/New folder/image01.jpg";
import image02 from "../../../assets/about/New folder/image02.jpg";
import image03 from "../../../assets/about/New folder/image03.jpg";
import image04 from "../../../assets/about/New folder/image04.jpg";
import image05 from "../../../assets/about/New folder/image05.jpg";

const OurServices = () => {
  return (
    <div>
      <div className="my-20 text-center font-bold">
        <p className="text-primary mb-2">Quality and affordable dentistry</p>
        <h1 className="text-4xl ">Our Dental Services</h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image01} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">Tooth Extraction</h2>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image02} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">Teeth Whitening</h2>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image03} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">
              Routine Dental Exam & Check Up
            </h2>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image04} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">
              Root Canal Treatment
            </h2>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image05} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">Orthodontics</h2>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image03} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">Dental Fillings</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
