"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import React from "react";

const Verify = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  // const router = useRouter();
  const verifyToken = async () => {
    try {
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  return <div>Verify</div>;
};

export default Verify;
