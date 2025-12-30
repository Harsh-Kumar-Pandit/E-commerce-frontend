import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 ">
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-8 shadow-md
                   animate-fade-up"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <p className="text-2xl font-semibold tracking-wide">
            {currentState}
          </p>
          <span className="w-8 h-[2px] bg-gray-800"></span>
        </div>

        <div className="flex flex-col gap-5 transition-all duration-300">

          {currentState !== "Login" && (
            <input
              type="text"
              placeholder="Full Name"
              className="input animate-slide"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="input animate-slide"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input animate-slide"
            required
          />

          <div className="flex justify-between text-sm text-gray-500">
            <p className="cursor-pointer hover:text-black transition">
              Forgot password?
            </p>

            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign up")}
                className="cursor-pointer hover:text-black transition"
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer hover:text-black transition"
              >
                Login here
              </p>
            )}
          </div>

          <button
            className="mt-2 bg-black text-white py-3 text-sm font-medium
                       rounded-lg transition-all duration-200
                       hover:bg-gray-800 active:scale-95"
          >
            {currentState === "Login" ? "Login" : "Create Account"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default Login;
