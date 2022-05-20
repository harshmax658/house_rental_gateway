import React from "react";

const Card = () => {
  return (
    <div className="flexbox">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://source.unsplash.com/900x900/?houses"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Bheem Taal </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h4>$60.4- 5.4</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
