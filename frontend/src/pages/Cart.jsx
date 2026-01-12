import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, cartItems, currency, updateQuanity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const subtotal = cartData.reduce((total, item) => {
    const product = products.find((p) => p._id === item._id);
    return product ? total + product.price * item.quantity : total;
  }, 0);

  const deliveryFee = cartData.length ? 10 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="pt-16 px-4 sm:px-10 max-w-7xl mx-auto">

  

      {cartData.length === 0 ? (
        <>
      <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">

  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
    <img
      src={assets.cart_icon}
      alt="Empty Cart"
      className="w-8 h-8 opacity-70"
    />
  </div>

  <h1 className="text-2xl font-semibold text-gray-900">
    Your cart is empty
  </h1>

  <p className="max-w-md text-sm text-gray-500">
    Looks like you haven’t added anything yet.  
    Start shopping to discover the latest trends and great deals.
  </p>

  <button
    onClick={() => navigate("/collection")}
    className="mt-4 rounded-full bg-black px-8 py-3 text-sm font-medium text-white
               hover:bg-gray-900 transition"
  >
    Start Shopping
  </button>

</div>

        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

          <div className="space-y-6">
            {cartData.map((item, index) => {
              const product = products.find(
                p => p._id === item._id
              );

              if (!product) return null;

              return (
                <div
                  key={`${item._id}-${item.size}`}
                  className="flex flex-col sm:flex-row items-center gap-6
                             bg-white border rounded-xl p-5
                             shadow-sm hover:shadow-md transition"
                >

                  <Link to={`/product/${item._id}`}>
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-24 h-32 object-cover rounded-lg
                                 cursor-pointer hover:opacity-90 transition"
                    />
                  </Link>

                  <div className="flex-1">
                    <p className="text-lg font-medium text-gray-900">
                      {product.name}
                    </p>

                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>
                        {currency}
                        {product.price}
                      </span>

                      <span className="px-3 py-1 border rounded-full text-xs">
                        Size: {item.size}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 justify-center">
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        if (value > 0) {
                          updateQuanity(item._id, item.size, value);
                        }
                      }}
                      className="w-12 h-8 text-center
                                 border border-gray-300 rounded-md
                                 text-sm bg-gray-100 appearance-none
                                 focus:outline-none focus:border-black"
                    />

                    <button
                      onClick={() =>
                        updateQuanity(item._id, item.size, 0)
                      }
                      className="p-2 rounded-md hover:bg-gray-100 transition"
                      aria-label="Remove item"
                    >
                      <img
                        src={assets.bin_icon}
                        alt=""
                        className="w-4 opacity-70 hover:opacity-100"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white border rounded-xl p-6 h-fit shadow-sm">
            <h3 className="text-lg font-medium mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  {currency}
                  {subtotal}.00
                </span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>
                  {currency}
                  {deliveryFee}.00
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>
                  {currency}
                 {total}.00
                </span>
              </div>
            </div>

            <button
              className="w-full mt-6 bg-black text-white py-3 text-sm
                         hover:bg-gray-800 transition" onClick={() => navigate('/place-order')}
            >
              PROCEED TO CHECKOUT
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
