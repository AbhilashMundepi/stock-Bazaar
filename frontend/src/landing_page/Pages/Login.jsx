import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Pages.css';

import { ToastContainer, toast } from "react-toastify";

const  Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "https://stock-bazaar-1.onrender.com",
  //       {
  //         ...inputValue,
  //       },
  //       { withCredentials: true }
  //     );
  //     console.log(data);
  //     const { success, message } = data;
  //     if (success) {
  //       handleSuccess(message);
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 1000);
  //     } else {
  //       handleError(message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setInputValue({
  //     ...inputValue,
  //     email: "",
  //     password: "",
  //   });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 🚨 FIX 1: Make sure you're posting to the correct /login endpoint
      const { data } = await axios.post(
        "https://stock-bazaar-1.onrender.com/login", // Changed from "/" to "/login"
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);

      // 🚨 FIX 2: Get the 'token' from the response data
      const { success, message, token } = data; 

      // 🚨 FIX 3: Check for 'success' AND 'token'
      if (success && token) { 
        handleSuccess(message);
        setTimeout(() => {
          // 🚨 FIX 4: Use window.location.href to redirect to your OTHER site
          // (Replace this with your real dashboard URL)
          window.location.href = `https://stock-bazaar-pi.vercel.app?token=${token}`;
        }, 1000); // 1-second delay is fine, it lets the user see the toast
      } else {
        // Handle login failure or if no token was sent
        handleError(message || "Login failed or token not received.");
      }
    } catch (error) {
      console.log(error);
      handleError("An error occurred during login.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  

  return (
    <div className="auth-page">
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
