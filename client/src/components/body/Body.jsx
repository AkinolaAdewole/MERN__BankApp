import React from "react";
import BodyCards from "./BodyCards";
import housing from '../resources/housing.jpg'
import InterPlanet from "../resources/interplanet.jpg";
import local from "../resources/local.jpg";

const Body = () => {
  return (
    <>
      <div className="m-5">
        <div className="my-5">
          <h3 className="text-center">We finance your dreams</h3>
          <p className="text-center text-primary">
            Every and anything you can think of{" "}
          </p>
        </div>
        <div className="row  g-3">
        <BodyCards
            title="Local Travels"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image={local}
          />
          <BodyCards
            title="Housing Loans"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image={housing}
          />
           <BodyCards
            title="Local Travels"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image={local}
          />
          <BodyCards
            title="Inter-planetary Travels"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image={InterPlanet}
          />
          <BodyCards
            title="Local Travels"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image={local}
          />
         
          <BodyCards
            title="Housing Loans"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image={housing}
          />
          <BodyCards
            title="Inter-planetary Travels"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            image={InterPlanet}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
