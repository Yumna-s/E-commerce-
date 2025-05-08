import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/item/item.jsx";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-short">
          sort by <img src={dropdown_icon} />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product
          .filter((item) => item.category === props.category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
}

export default ShopCategory;
