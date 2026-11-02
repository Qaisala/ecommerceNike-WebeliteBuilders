import React from "react";
import all_product from "../Utils/all_product";
import Item from "./Item";
import Breadcrumbs from "./Breadcrumbs"; // Adjust path if necessary

function ProductList({ category }) {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:pt-24 lg:max-w-7xl lg:px-8 my-40 md:my-20">
      
      {/* Breadcrumbs Integration */}
      <div className="mb-6 px-6 md:px-0">
        <Breadcrumbs category={category} />
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif uppercase">
        {category} Collection
      </h2>
      <p className="text-center mt-3 max-w-2xl mx-auto text-gray-500">
        Explore our latest selection of top-selling items for {category}.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {all_product.map((item) => {
          if (category === item.category) {
            return <Item key={item.id} item={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default ProductList;