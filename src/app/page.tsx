"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/signup"); // Redirect to signup page
  }, []); // Empty dependency array ensures this runs only once on component mount

  return null; // Return null or any other placeholder content since we are redirecting
}
