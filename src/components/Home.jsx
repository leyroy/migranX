import React from "react";
import hobg from "../Assets/image.webp";
import { IoLocationSharp } from "react-icons/io5";
import bg1 from "../Assets/bg2.webp";
import Header from "./Header";

export default function Home({ sectionRef, footerRef }) {
  return (
    <div className="h-screen w-screen relative">
      {/* <!--background image set--> */}
      <img src={hobg} alt="" className="w-full object-none md:object-fill h-screen" />
      <div className="absolute top-0 w-full bottom-0">
        <Header sectionRef={sectionRef} />
        <div className="flex px-2 w-full backdrop-brightness-50 text-white flex-col h-full items-center justify-center">
          <h2 className="font-bold text-white text-3xl md:text-5xl text-center">
            {" "}
            Explore the ultimate cultural marketplace.
          </h2>
          <p className="font-semibold text-gray-200 mt-7 text-lg">
            Enter a postcode to see what we deliver
          </p>
          <div
            className="bg-white ml-2 w-full mt-4
          justify-between sm:w-96 gap-3 shadow-md rounded-3xl px-4 py-1 flex  items-center"
          >
            <div className="text-black">
              <IoLocationSharp className="w-7 h-8 " />
            </div>
            <input
              type="text"
              className="w-full px-3 text-black py-2 placeholder:text-xl focus:outline-0"
              placeholder="eg.ABCD 123"
            />
            <button className="md:px-8 mdtext-xl text-lg text-gray-900 font-medium px-6 md:py-3 py-2 bg-orange-400 rounded-full">
              search
            </button>
          </div>
        </div>
        <div className="w-full absolute -bottom-2 overflow-hidden">
          <img src={bg1} alt="" fill className="object-contain " />
        </div>
      </div>
    </div>
  );
}
