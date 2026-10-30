import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0">
      {/* product images - left content */}
      <div className="flex md:1/2 gap-4">
        <div className="flex flex-col gap-4 md:h-125">
          <img
            onClick={() => setMainImage(product.image)}
            src={product.image}
            alt={product.name}
            className="h-18.75 md:h-40.75 w-30 md:w-25 cursor-pointer"
          />
          <img
            onClick={() => setMainImage(product.image1)}
            src={product.image1}
            alt={product.name}
            className="h-18.75 md:h-40.75 w-30 md:w-25 cursor-pointer"
          />
          <img
            onClick={() => setMainImage(product.image2)}
            src={product.image2}
            alt={product.name}
            className="h-18.75 md:h-40.75 w-30 md:w-25 cursor-pointer"
          />
          <img
            onClick={() => setMainImage(product.image3)}
            src={product.image3}
            alt={product.name}
            className="h-18.75 md:h-40.75 w-30 md:w-25 cursor-pointer"
          />
        </div>
        <div>
          <img src={mainImage} alt="/" className="w-150 md:w-120 md:h-145" />
        </div>
      </div>

      {/* product info - right content */}
      <div className="flex flex-col md:1/2 mt-8 md:mt-0">
        <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4">
          <Star fill="#138695" />
          <Star fill="#138695" />
          <Star fill="#138695" />
          <Star fill="#138695" />
          <Star fill="gray" />
          <p>(122)</p>
        </div>
        <div className="flex gap-5 font-semibold items-center my-5">
          <div className="text-[#138695] text-3xl">${product.new_price}</div>
          <div className="text-gray-500 text-2xl line-through">
            ${product.old_price}
          </div>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
          perspiciatis placeat dolores, rem perferendis iste officia odio
          dolorum at veniam fugiat modi nisi. Nobis ratione error at ex veniam.
        </div>
        <div>
          <h1 className="font-semibold text-gray-400 text-2xl mt-4">
            Select Size
          </h1>
          <div className="flex flex-wrap gap-4 items-center my-4">
            <div className="border border-gray-100 p-4">UK 7</div>
            <div className="border border-gray-100 p-4">UK 8</div>
            <div className="border border-gray-100 p-4">UK 9</div>
            <div className="border border-gray-100 p-4">UK 10</div>
            <div className="border border-gray-100 p-4">UK 11</div>
          </div>
        </div>
        <Link to="/cart">
          <button
            onClick={() => addToCart(product.id)}
            className="bg-[#138695] text-white px-6 py-3 my-4 w-max cursor-pointer"
          >
            ADD TO CART
          </button>
        </Link>
        <p>
          <span className="font-semibold">Category :</span> Sports, Gym, Running
        </p>
        <p>
          <span className="font-semibold">Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
