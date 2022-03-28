import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <span className="card-title">Pleciuga Caffe</span>
        <span className="line"></span>
        <span className="card-desctription">#html #css #js</span>

        <div className="card-visit">
          <a href="https://pleciugacaffe.com/">Visit</a>
        </div>
      </div>
      <div className="card">
        <span className="card-title">Wedding site</span>
        <span className="line"></span>
        <span className="card-desctription">#html #css #js</span>

        <div className="card-visit">
          <a href="https://roksanairobert.pl/">Visit</a>
        </div>
      </div>
      <div className="card">
        <span className="card-title">Ecommerce shop</span>
        <span className="line"></span>
        <span className="card-desctription">#wordpress</span>
        <div className="card-visit">
          <a href="https://www.elabrocka.pl/">Visit</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
