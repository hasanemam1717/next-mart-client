import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen"> {children}</main>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
