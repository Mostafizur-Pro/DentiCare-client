import React from "react";
import image from "../../../assets/about/image.jpg";
import image01 from "../../../assets/about/toothbrash.png";
import image02 from "../../../assets/about/tooth.jpg";

const AboutDetails = () => {
  return (
    <div>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <div className="hero my-10">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                  <h1 className="text-2xl font-bold">
                    Maecenas nec odio et ante tincidunt tempus
                  </h1>
                  <p className="py-6">
                    Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
                    iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante
                    arcu, accumsan a, consectetuer eget, posuere ut, mauris.
                  </p>
                </div>
                <img src={image01} className="rounded-lg lg:w-1/6 " alt="" />
              </div>
            </div>
            <div className="hero my-10">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                  <h1 className="text-2xl font-bold">
                    Maecenas nec odio et ante tincidunt tempus
                  </h1>
                  <p className="py-6">
                    Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
                    iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante
                    arcu, accumsan a, consectetuer eget, posuere ut, mauris.
                  </p>
                </div>
                <img src={image02} className="rounded-lg lg:w-1/6 " alt="" />
              </div>
            </div>
          </div>
          <img src={image} className="rounded-lg lg:w-1/2 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
