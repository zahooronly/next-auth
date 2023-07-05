"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/signup");
  // }, []);

  // return null;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="bg-green-600 text-4xl text-white p-[12%] rounded-md hover:bg-green-700 transition-all duration-200 ease-in-out mt-8 w-1/2 text-center font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50 hover:shadow-xl hover:scale-105 transform ">
        Home
      </h1>
      <hr />
      {/* <button
        // onClick={logoutHandler}
        className="bg-red-500 text-white p-4 rounded-md hover:bg-red-600 transition-all duration-200 ease-in-out mt-8 w-1/2 text-center font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-opacity-50 hover:shadow-xl hover:scale-105 transform "
      >
        Logout
      </button> */}
    </div>
  );
}
