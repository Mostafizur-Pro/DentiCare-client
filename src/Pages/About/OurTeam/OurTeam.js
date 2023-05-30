import React from "react";
import image01 from "../../../assets/about/New folder/img01.jpg";
import image02 from "../../../assets/about/New folder/img02.jpg";
import image03 from "../../../assets/about/New folder/img03.jpg";
import image04 from "../../../assets/about/New folder/img04.jpg";

const OurTeam = () => {
  return (
    <div>
      <div className="my-20 text-center font-bold">
        <p className="text-primary mb-2">Professional and highly trained</p>
        <h1 className="text-4xl ">Our Dental Team</h1>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="card card-compact  bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image01} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Camille Walters</h2>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image02} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl"> Peter Vincent</h2>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image03} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Joseph Watkins</h2>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl mb-10">
          <figure>
            <img className="rounded-xl" src={image04} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Sally Steele</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
