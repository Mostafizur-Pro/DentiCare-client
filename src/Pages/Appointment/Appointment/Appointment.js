import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { FaAngleRight, FaHome } from "react-icons/fa";

const Appointment = () => {
  useTitle("Appointment");
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <div className="bg-primary flex justify-between items-center text-white px-10">
        <h1 className="text-4xl font-bold">A p p o i n t m e n t</h1>
        <p className="flex items-center gap-2 text-xl py-10">
          {" "}
          <FaHome /> Home <FaAngleRight /> Appointment
        </p>
      </div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
