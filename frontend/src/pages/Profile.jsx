import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const { backendUrl, token, navigate } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          backendUrl + "/api/user/me",
          { headers: { token } }
        );

        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch {
        navigate("/login");
      }
    };

    fetchProfile();
  }, [token]);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading your profile…</p>
      </div>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-8">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-3xl font-semibold shadow-md">
            {initials}
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Welcome, {user.name}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Manage your account details
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-500">Full Name</span>
            <span className="text-sm font-medium text-gray-900">
              {user.name}
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-500">Email Address</span>
            <span className="text-sm font-medium text-gray-900">
              {user.email}
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-sm text-gray-500">Account Status</span>
            <span className="text-sm font-semibold text-green-600">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
