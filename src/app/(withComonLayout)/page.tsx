"use client";
import { useUser } from "@/context/UserContext";
import React from "react";

const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1>Welcome to nextmart </h1>
    </div>
  );
};

export default HomePage;
