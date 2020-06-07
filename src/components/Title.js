import React from "react";
import cat from "../image/cat.png";

const Title = () => {
  return (
    <div className="title">
      <div><h1 className="header">Cat Fact</h1></div>
      <div className="image">
      <img
        src={cat}
        alt="cat_pic"
        className="card-img-top"
        style ={{height: '250px', width: '300px'}}
      />
      </div>
      <p className="lead-para">Some interesting facts about cat:</p>
    </div>
  );
};

export default Title;
