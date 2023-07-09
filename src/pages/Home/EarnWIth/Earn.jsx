import React from "react";
import { FaArrowRight } from "react-icons/fa";
import download from "../../../assets/home/patho_files/Download-app.jpg";
import applestore from '../../../assets/home/patho_files/App-Store-ds.png';
import googlePlay from '../../../assets/home/patho_files/Google-Play-ds.png';
import new1 from '../../../assets/home/patho_files/Daily-Star.jpg';
import new2 from '../../../assets/home/patho_files/TechCrunch.jpg';
import new3 from '../../../assets/home/patho_files/TechinAsia.jpg';
import new4 from '../../../assets/home/patho_files/CNBC.jpg';
import new5 from '../../../assets/home/patho_files/Nasdq.jpg';

const Earn = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="font-semibold text-4xl text-center mt-10">
        Earn with your car, bike or bicycle
      </h1>
      <p className="font-thin text-center">
        Become a captain, rider or foodman on the highest earning platform!
      </p>
      <button className="bg-red-600 px-6 py-4 text-white flex gap-2 rounded-md mt-5">
        Start Earning <FaArrowRight className="h-6 w-6" />{" "}
      </button>
      <section className="flex items-center justify-center gap-3">
        <div>
          <h3 className="font-semibold text-3xl">Download the app</h3>
          <p>Download now & avail all of our services through the app</p>
          <p>Pathao User App</p>
          <div className="flex gap-2">
            <img src={googlePlay} alt="" srcset="" />
            <img src={applestore} alt="" />
          </div>
          <p>Pathao Drive App</p>
          <img src={googlePlay} alt="" srcset="" />
        </div>
        <div>
          <img src={download} alt="" />
        </div>
      </section>
      <section>
        <h1 className="font-semibold text-4xl text-center mt-28">Making Headlines</h1>
        <div className="flex justify-between">
          <img className="w-48" src={new1} alt="" />
          <img className="w-48" src={new2} alt="" />
          <img className="w-48" src={new3} alt="" />
          <img className="w-48" src={new4} alt="" />
          <img className="w-48" src={new5} alt="" />
        </div>
        <div className="border-2 p-5 ">
          <p>
            Bangladesh’s version of Go-Jek raises over $10M in a round led by
            Go-Jek
          </p>
          <h2 className="font-mono text-2xl">
            The company began offering motorbike taxis on-demand and a logistics
            service, and it branched out into food delivery this year.
          </h2>
        </div>
      </section>
      <section className="grid grid-cols-2 mt-48">
        <div>
          <p className="font-medium text-2xl">Start delivering products using Pathao courier</p>
          <h1 className="font-semibold text-5xl ">Trusted & Reliable Delivery For Your Business</h1>
        </div>
        <div className="flex justify-end items-center">
          <button className="bg-red-500 p-5 flex gap-4 items-center font-medium text-xl text-white">Explore Courier <FaArrowRight /> </button>
        </div>
      </section>
    </div>
  );
};

export default Earn;
