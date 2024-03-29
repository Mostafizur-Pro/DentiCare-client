import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Welcome from "../Welcome/Welcome";
import AlwaysAcceptingNewPatients from "../AlwaysAcceptingNewPatients/AlwaysAcceptingNewPatients";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <Welcome />
      <MakeAppointment />
      <Testimonial />
      <AlwaysAcceptingNewPatients />
    </div>
  );
};

export default Home;
