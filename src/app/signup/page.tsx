"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const signupHandler = async () => {
    // Handle sign up logic here
    try {
    } catch (error) {
    } finally {
    }
  };

  const router = useRouter();

  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg  shadow-lg p-8 ">
        {/* <h1 className="text-4xl font-bold mb-6 text-center z-50"> */}
        Signup Here
        {/* </h1> */}
        <div className="flex flex-col space-y-4">
          <label className="text-gray-700 font-semibold" htmlFor="username">
            Username
          </label>
          <input
            className="text-gray-700 border-2 border-gray-500 rounded-lg px-4 py-2 placeholder-gray-500"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label className="text-gray-700 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="text-gray-700 border-2 border-gray-500 rounded-lg px-4 py-2 placeholder-gray-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className="text-gray-700 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="text-gray-700 border-2 border-gray-500 rounded-lg px-4 py-2 placeholder-gray-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="border-2 border-gray-500 rounded-lg px-4 py-2 bg-gray-500 text-white font-bold hover:bg-gray-700 transition duration-300"
            onClick={signupHandler}
          >
            {buttonDisabled ? "Fill all fields" : "Signup"}
          </button>
          <Link href="/login">
            <p className="text-blue-700 text-center border-gray-500 rounded-lg">
              goto login page
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
