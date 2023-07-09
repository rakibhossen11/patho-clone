import React from "react";
import './platform.css';
import image1 from '../../../assets/home/Image-01.jpg';
import image2 from '../../../assets/home/Image-02.jpg';
import image3 from '../../../assets/home/Image-03.jpg';
import image4 from '../../../assets/home/Image-04.jpg';
import image5 from '../../../assets/home/Image-05.jpg';
import image6 from '../../../assets/home/Image-06.jpg';

const Platform = () => {
  return (
    <div className="p-4">
      <div className="shadow-2xl flex items-center justify-center mt-4 max-w-2xl mx-auto py-4">
        <div className="p-4 ">
          <h1 className="font-bold text-2xl">6 Million+</h1>
          <p className="text-xl font-mono">App Downloads</p>
        </div>
        <hr className="divide-black divide-y-2" />
        <div className="p-4">
          <h1 className="font-bold text-2xl">70 Million+</h1>
          <p className="text-xl font-mono">Trips/Orders Served</p>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-2xl">6 Million+</h1>
          <p className="text-xl font-mono">Lives Impacted</p>
        </div>
      </div>
      <div className="text-center mt-16">
        <h1 className="font-bold text-4xl">The Pathao Platform</h1>
        <p>Here’s everything Pathao offers just for you!</p>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-center mt-16">Keep #MovingSafely With Us!</h1>
        <div className="flex justify-between mt-16">
          <img className="image1" src={image1} alt="" />
          <img className="image2" src={image2} alt="" />
          <img className="image3" src={image3} alt="" />
        </div>
        <div className="flex justify-between mt-16">
          <img className="image4" src={image4} alt="" />
          <img className="image5" src={image5} alt="" />
          <img className="image6" src={image6} alt="" />
        </div>
      </div>
      <section className="flex gap-6 p-10">
        <div>
          <h1 className="font-semibold text-4xl">The Safest Platform</h1>
          <p className="font-medium text-zinc-600">We care about your safety. And to ensure it, we’ve introduced insurance for all of our users, rides & captains. Your safety is our first priority.</p>
        </div>
        <div>
          <h1 className="font-semibold text-4xl">We Care About You</h1>
          <p className="font-medium text-zinc-600">We believe in #MovingSafely. Pathao is the only platform with a rapid response team, call centre support, insurance coverage, live location share and more!</p>
        </div>
      </section>
    </div>
  );
};

export default Platform;
