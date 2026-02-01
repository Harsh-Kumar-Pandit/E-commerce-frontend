import React, { use, useContext, useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { token, setToken, backendUrl } = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      if (currentState === "Sign up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          console.log(response.data);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          backendUrl + "/api/user/login",
          { email, password }
        );

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success("Login successful");
          navigate("/");
        } else {
          toast.error("Login Error")
        }
      }
    } catch (error) {
      console.log("BACKEND ERROR:", error.response?.data);
      const errorMsg =
        currentState === "Login" ? "Login failed" : "Registration failed";
      toast.error(error.response?.data?.message || errorMsg);
    } finally {
      setLoading(false);
    } 
  };

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[70vh] flex items-center justify-center px-4"
    >
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-8 shadow-md
                   animate-fade-up"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <p className="text-2xl font-semibold tracking-wide">{currentState}</p>
          <span className="w-8 h-[2px] bg-gray-800"></span>
        </div>

        <div className="flex flex-col gap-5 transition-all duration-300">
          {currentState !== "Login" && (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              className="input animate-slide"
              required
            />
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Address"
            className="input animate-slide"
            required
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
                onClick={() => {
                  setCurrentState("Sign up");
                  navigate("/register");
                }}
                className="cursor-pointer hover:text-black transition"
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => {
                  setCurrentState("Login");
                  navigate("/login");
                }}
                className="cursor-pointer hover:text-black transition"
              >
                Login here
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-black text-white py-3 text-sm font-medium
                       rounded-lg transition-all duration-200
                       hover:bg-gray-800 active:scale-95"
          >
            {currentState === "Login" ? "Login" : "Create Account"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
