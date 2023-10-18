import React from "react";

const BodyCards = (props) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card border shadow-sm ">
        <img src={props.image} className="card-img-top" alt="" />
          <div className="card-body  py-5 px-4">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text text-secondary">{props.text}</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default BodyCards;
