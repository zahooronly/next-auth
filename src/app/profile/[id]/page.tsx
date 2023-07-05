"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>UserProfile</h1>
      <p className="text-4xl m-8">
        Profile{" "}
        <span className="bg-green-500 text-black p-4 rounded-md">
          {params.id}
        </span>
      </p>
    </div>
  );
};

export default UserProfile;
