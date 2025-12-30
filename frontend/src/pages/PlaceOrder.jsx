import React, { useContext, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { cartItems, products, currency,navigate } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // calculate subtotal
  const subtotal = Object.keys(cartItems).reduce((sum, productId) => {
    const product = products.find(p => p._id === productId);
    if (!product) return sum;

    const sizes = cartItems[productId];
    for (let size in sizes) {
      sum += product.price * sizes[size];
    }
    return sum;
  }, 0);

  const deliveryFee = subtotal > 0 ? 10 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-10">

      {/* LEFT: DELIVERY INFO */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        <div className="flex gap-3">
          <input className="border rounded py-1.5 px-3.5 w-full" placeholder="First Name" />
          <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Last Name" />
        </div>

        <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Email" />
        <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Street" />

        <div className="flex gap-3">
          <input className="border rounded py-1.5 px-3.5 w-full" placeholder="City" />
          <input className="border rounded py-1.5 px-3.5 w-full" placeholder="State" />
        </div>

        <div className="flex gap-3">
          <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Zipcode" />
          <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Country" />
        </div>

        <input className="border rounded py-1.5 px-3.5 w-full" placeholder="Phone" />
      </div>

      {/* RIGHT: ORDER SUMMARY + PAYMENT */}
      <div className="w-full sm:max-w-[420px]">

        {/* ORDER SUMMARY */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-6">Order Summary</h3>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{currency}{subtotal}.00</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{currency}{deliveryFee}.00</span>
            </div>

            <hr />

            <div className="flex justify-between text-base font-semibold text-gray-900">
              <span>Total</span>
              <span>{currency}{total}.00</span>
            </div>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="mt-10">
          <Title text1="PAYMENT" text2="METHOD" />

          <div className="flex flex-col gap-3 mt-4">

            {/* STRIPE */}
            <div
              onClick={() => setPaymentMethod("stripe")}
              className={`flex items-center gap-3 border p-3 cursor-pointer rounded
                ${paymentMethod === "stripe" ? "border-black bg-green-50" : ""}`}
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center
                  ${paymentMethod === "stripe" ? "border-green-600" : "border-gray-400"}`}
              >
                {paymentMethod === "stripe" && (
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                )}
              </span>
              <img src={assets.stripe_logo} alt="Stripe" />
            </div>

            {/* RAZORPAY */}
            <div
              onClick={() => setPaymentMethod("razorpay")}
              className={`flex items-center gap-3 border p-3 cursor-pointer rounded
                ${paymentMethod === "razorpay" ? "border-black bg-green-50" : ""}`}
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center
                  ${paymentMethod === "razorpay" ? "border-green-600" : "border-gray-400"}`}
              >
                {paymentMethod === "razorpay" && (
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                )}
              </span>
              <img src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            {/* COD */}
            <div
              onClick={() => setPaymentMethod("cod")}
              className={`flex items-center gap-3 border p-3 cursor-pointer rounded
                ${paymentMethod === "cod" ? "border-black bg-green-50" : ""}`}
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center
                  ${paymentMethod === "cod" ? "border-green-600" : "border-gray-400"}`}
              >
                {paymentMethod === "cod" && (
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                )}
              </span>
              <span className="text-sm font-medium">Cash on Delivery</span>
            </div>
          </div>

          {/* SINGLE PLACE ORDER BUTTON */}
          <button onClick={() => navigate('/orders')} className="w-full mt-6 bg-black text-white py-3 text-sm hover:bg-gray-800 transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
