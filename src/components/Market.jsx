import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import {AnimatePresence, motion} from "framer-motion"
import { categories, products } from "../Assets/data";

export default function Market({openModal, sectionRef}) {
  const [filterdProducts, setFilterdProducts] = useState("Asian");
  const data = products.filter(
    (product) =>
      product.procuct_category?.toLowerCase() === filterdProducts?.toLowerCase()
  );
  useEffect(() => {console.log(data);}, [data]);
  
  return (
    <div ref={sectionRef}
      className="flex min-h-screen md:px-12 py-6 w-screen  mx-auto lg:px-16 px-3
    flex-col items-center justify-center"
    >
      <div className=" my-5 flex flex-col w-full nu gap-3 ">
        <h1 className="mx-auto text-2xl font-bold text-orange-500">
          OUR MARKETS
        </h1>
        <p className="text-3xl text-center font-extrabold mx-auto">
          Markets That Always Brings Home To You
        </p>
      </div>
      <div className="w-full flex-1 gap-3 flex lg:flex-row flex-col items-center justify-start">
        <div className=" flex-row flex lg:flex-col lg:overflow-y-scroll lg:w-72 ">
          {categories.map((category, index) => (
            <div
              className="flex items-center gap-5 cursor-pointer"
              onClick={() => setFilterdProducts(category.name)}
            >
              <div>
                <img
                  src={category.image}
                  className="h-12 w-16 mt-2 ml-3"
                  alt=""
                />
              </div>
              <div className="hidden lg:block">
                {category.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex text-white items-center gap-4 flex-col justify-center flex-1 lg:justify-evenly w-full lg:flex-row">
          {data.map((data) => (
            <div
              key={data.ie}
              className="relative bg-yellow-500 rounded-md font-semibold text-xl flex items-center justify-center h-96 w-80 my-2 p-2"
            >
             <AnimatePresence>
             <motion.img initial={{x:"100%", scale:0}} animate={{x:"0", scale:1}} transition={{duration:0.3}} src={data.product_image} alt="" className="h-full py-3" />

             </AnimatePresence>
              <div className=" gap-2 rounded w-full h-full absolute items-start p-3 justify-end bg-gradient-to-b to-gray-950 from-transparent backdrop-contrast-50 flex flex-col">
                <p className="text-2xl font-semibold">{data.product_label}</p>
                <div>
                  <span>$</span>
                  {data.produc_price}
                </div>
                <div className="flex cursor-ponter w-fit gap-5 mt-4 items-center justify-center">
                  <button onClick={openModal}>Oder Now</button>
                  <MdArrowForwardIos />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
