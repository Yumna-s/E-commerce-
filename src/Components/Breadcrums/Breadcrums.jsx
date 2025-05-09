import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../../Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { product } = props;
  if (!product) {
    return <div className="breadcrums">Loading...</div>;
  }
  return (
    <div className="breadcrums">
      HOME
      <img src={arrow_icon} alt="" />
      SHOP
      <img src={arrow_icon} />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};
export default Breadcrums;
