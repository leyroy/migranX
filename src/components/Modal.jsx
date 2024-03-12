import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Modal({ openModal }) {
  return (
    <div className="fixed z-30  left-0 h-screen w-screen top-0 bottom-0 right-0 ">
      <div className="h-full px-3 flex relative items-center justify-center w-full">
        <div
          onClick={openModal}
          className="absolute backdrop-blur backdrop-brightness-50 top-0 bottom-0 w-full h-full"
        ></div>

          <motion.div
            key="modal"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0, x: "100%", transition:{duration:0.35} }}
            className="md:w-3/6 w-full py-5 h-2/5 md:h-3/5 gap-4 bg-white rounded-md flex-col md:px-10 px-2 box shadow-md z-10 modal flex items-center justify-center"
          >
            <div className="mb-auto ml-auto" onClick={openModal}>
              <IoMdClose />
            </div>
            <div className="text-3xl font-bold"> Enter Postcode</div>
            <div className=" w-full justify-between gap-3 shadow-md rounded-3xl px-4 py-1 flex items-center">
              <div className="text-black cursor-pointer text-3xl">
                <IoLocationSharp className="w-7 h-8 " />
              </div>
              <input
                type="text"
                className="w-full rounded px-3 text-black py-2 border border-gray-600 placeholder:text-xl focus:outline-0"
                placeholder="eg.ABCD 123"
              />
            </div>
            <button
              onClick={openModal}
              className="p-3 w-full rounded-md bg-green-300 mt-auto"
            >
              close
            </button>
          </motion.div>
      
      </div>
    </div>
  );
}

export default Modal;
