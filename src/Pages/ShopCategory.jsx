import React from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";

function ShopCategory(props) {
  const { all_product } = useCntext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcateegory-indexShort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-short">
          sort by <img src={dropdown_icon} />
        </div>
      </div>
      <div className="shopcategory-products">{all_product.map}</div>
    </div>
  );
}

export default ShopCategory;
