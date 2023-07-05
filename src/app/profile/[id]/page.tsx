"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const UserProfile = ({ params }: any) => {
  const router = useRouter();
  const logoutHandler = async () => {
    // Handle logout logic here
    const response = await axios.get("/api/users/logout/");
    console.log("Logout success", response.data);
    toast.success("Logout success");
    router.push("/login");
    try {
    } catch (error: any) {
      toast.error("Logout Failed", error.message);
      console.log("Logout failed", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>UserProfile</h1>
      <p className="text-4xl m-8">
        Profile{" "}
        <span className="bg-green-500 text-black p-4 rounded-md">
          {params.id}
        </span>
      </p>
      <hr />
      <button
        onClick={logoutHandler}
        className="bg-red-500 text-white p-4 rounded-md hover:bg-red-600 transition-all duration-200 ease-in-out mt-8 w-1/2 text-center font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-opacity-50 hover:shadow-xl hover:scale-105 transform "
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
