import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group relative block overflow-hidden rounded-2xl
                 bg-white border border-gray-200
                 hover:border-gray-300 hover:shadow-xl
                 transition-all duration-300"
    >

      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={image?.[0]}
          alt={name}
          className="h-full w-full object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0
                        group-hover:bg-black/5 transition" />
      </div>

      <div className="p-4 space-y-1">
        <p
          className="text-sm font-medium text-gray-700
                     truncate group-hover:text-black transition"
        >
          {name}
        </p>

        <p className="text-base font-semibold text-gray-900">
          {currency}
          {price}
        </p>
      </div>

      <div
        className="absolute inset-x-0 bottom-0
                   translate-y-full group-hover:translate-y-0
                   bg-black/90 text-white backdrop-blur
                   border-t border-gray-200
                   text-center text-sm font-medium py-2
                   transition-all duration-300"
      >
        View Product →
      </div>
    </Link>
  );
};

export default ProductItem;
