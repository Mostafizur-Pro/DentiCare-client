import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import welcome from "../../../assets/welcome.jpg";

const Welcome = () => {
  return (
    <div>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={welcome} className="rounded-lg lg:w-1/2 " alt="" />
          <div>
            <p className="text-rose-400">Changing Lives One Smile At A Time!</p>
            <h1 className="text-5xl font-bold">
              We Accept All Major Insurances
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
