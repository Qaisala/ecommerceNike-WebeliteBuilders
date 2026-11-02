import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ category, product }) {
  return (
    <div className="flex items-center gap-1 md:gap-2 text-[#5e5e5e] font-semibold text-sm md:text-lg capitalize">
      <Link to="/" className="hover:text-black transition-colors">Home</Link> 
      <ChevronRight className="w-4 h-4" />

      {/* Case 1: Displaying a Category Page (e.g., Home > Men) */}
      {category && (
        <span className="text-black font-bold" aria-current="page">
          {category}
        </span>
      )}

      {/* Case 2: Displaying a Single Product Page (e.g., Home > Men > Product Name) */}
      {product && (
        <>
          <Link 
            to={`/${encodeURIComponent(product.category)}`}
            className="hover:text-black transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black font-bold" aria-current="page">
            {product.name}
          </span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;