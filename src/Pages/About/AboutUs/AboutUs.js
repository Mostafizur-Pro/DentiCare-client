import React from "react";

import { FaAngleRight, FaHome } from "react-icons/fa";
import AboutDetails from "../AboutDetails/AboutDetails";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-primary flex justify-between items-center text-white px-10">
        <h1 className="text-4xl font-bold">A b o u t US</h1>
        <p className="flex items-center gap-2 text-xl py-10">
          {" "}
          <FaHome /> Home <FaAngleRight /> About US
        </p>
      </div>
      <AboutDetails />
      <OurServices />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
