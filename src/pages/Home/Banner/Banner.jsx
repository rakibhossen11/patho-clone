import React from "react";
import "./banner.css";
import banner from "../../../assets/home/banner.png";
import { FaTicketAlt, FaArrowRight,FaMobile } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container flex flex-col justify-center pl-10">
      <h1 className="font-bold text-5xl">
        #1 Platform <br /> for All Services
      </h1>
      <p className="text-xl font-mono">
        One app, all services at your fingertips.
      </p>
      <div className="mt-10">
        <button className="bg-red-500 flex items-center justify-center p-5 rounded-sm text-white gap-4">
          <FaTicketAlt className="text-white w-6 h-6" />{" "}
          <span className="text-xl font-medium">Earn with Patho</span>{" "}
          <FaArrowRight className="h-6 w-6" />{" "}
        </button>
        <button className="flex items-center justify-center p-5 rounded-sm gap-4 mt-5 border-slate-300 border-2">
          <FaMobile className="w-6 h-6 text-red-500" />{" "}
          <span className="text-xl font-medium">Download App</span>{" "}
          <FaArrowRight className="h-6 w-6 text-red-500" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
