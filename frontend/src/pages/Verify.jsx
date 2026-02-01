import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const [status, setStatus] = useState("verifying"); 
  
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!token || !orderId) {
          setStatus("failed");
          setTimeout(() => navigate("/cart"), 2000);
          return;
        }

        const response = await axios.post(
          backendUrl + "/api/order/verifyStripe",
          { success, orderId },
          { headers: { token } }
        );

        if (response.data.success) {
          setStatus("success");
          setCartItems({});
          toast.success("Payment Completed");

          setTimeout(() => {
            navigate("/orders");
          }, 2000);
        } else {
          setStatus("failed");
          setTimeout(() => {
            navigate("/cart");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        setStatus("failed");
        toast.error("Payment verification failed");

        setTimeout(() => {
          navigate("/cart");
        }, 2000);
      }
    };

    verifyPayment();
  }, [token, orderId]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      {status === "verifying" && (
        <div className="text-center">
          <p className="text-xl font-semibold">Verifying Payment...</p>
          <p className="text-gray-500 mt-2">Please wait</p>
        </div>
      )}

      {status === "success" && (
        <div className="text-center text-green-600">
          <p className="text-2xl font-semibold">Payment Successful 🎉</p>
          <p className="mt-2">Redirecting to your orders...</p>
        </div>
      )}

      {status === "failed" && (
        <div className="text-center text-red-600">
          <p className="text-2xl font-semibold">Payment Failed ❌</p>
          <p className="mt-2">Redirecting to cart...</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
