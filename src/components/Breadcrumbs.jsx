import { ChevronRight } from "lucide-react";
import React from "react";

function Breadcrumbs(props) {
  const { product } = props;
  return (
    <div className="flex items-center gap-1 md:gap-2 px-6 md:px-0 text-[#5e5e5e] font-semibold text-sm md:text-lg capitalize mt-4">
      HOME <ChevronRight /> SHOP <ChevronRight /> {product.category}{" "}
      <ChevronRight /> {product.name}
    </div>
  );
}

export default Breadcrumbs;
