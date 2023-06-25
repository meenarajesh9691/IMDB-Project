import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Tvhome from "@/components/Tvhome";

const index = () => {
  return (
    <>
    
      <Navbar />
      <Header />
      <Home/>
      <Tvhome/>
    </>
  );
};

export default index;
