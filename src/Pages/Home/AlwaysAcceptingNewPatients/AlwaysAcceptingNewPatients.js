import React from "react";
import location from "../../../assets/icons/location.png";
import check from "../../../assets/icons/check.png";
import meet from "../../../assets/icons/meet.png";
import offer from "../../../assets/icons/offer.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AlwaysAcceptingNewPatients = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="text-4xl text-center font-bold">
          Always accepting new patients at the smilist!
        </h1>
      </div>
      <div className="flex gap-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img src={location} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Find A Location</h2>
            <p>
              Now with over 45+ locations in New York, New Jersey and
              Pennsylvania. Find the closest Smilist Dental location near you
              today!
            </p>
            <div className="card-actions justify-center">
              <PrimaryButton>View Location</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img src={check} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Check Your Insurance</h2>
            <p>
              In-Network with most major dental insurances like Aetna, Cigna,
              Delta Dental, BlueCross BlueShield, and many more!
            </p>
            <div className="card-actions justify-center">
              <PrimaryButton>Search Insurance</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img src={meet} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Meet The Dentists</h2>
            <p>
              A compassionate group of dentists focused on providing 5-star
              dental care to their patients.
            </p>
            <div className="card-actions justify-center">
              <PrimaryButton>Meet the Team</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img src={offer} alt="location" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Offers & Promotions</h2>
            <p>
              Take advantage of the most current and limited-time offers
              provided at each of the Smilist offices.
            </p>
            <div className="card-actions justify-center">
              <PrimaryButton>View Offers</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlwaysAcceptingNewPatients;
