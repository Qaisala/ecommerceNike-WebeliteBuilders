import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import ProductDisplay from "./ProductDisplay";
import Description from "./Description";
import { useParams } from "react-router-dom";
import all_product from "../Utils/all_product";

function SingleProduct() {
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="max-w-7xl mx-auto mb-32 mt-14">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product}/>
      <Description />
    </div>
  );
}

export default SingleProduct;
