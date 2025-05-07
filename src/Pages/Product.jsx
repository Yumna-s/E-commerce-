import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breakcrum product={product} />
    </div>
  );
}
export default Product;
