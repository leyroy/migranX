import React, { useState } from "react";
import { freqentAskedQ } from "../Assets/data";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinus,FaPlus } from "react-icons/fa6";

export default function FrequentAskQ() {
  const [isOpen, setIsOpen] = useState(0);
  const [duration, setDuration] = useState(0.4); 
  const hanldeShowContent = (id) => {
    if (isOpen !== id) {
      setIsOpen(id);
    } else {
      setIsOpen(null);
    }
  };

  const dropdownVariants = {
    open: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.4 } },
    closed: { scale: 0, y: "100%", opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="min-h-screen bg-white  flex items-center justify-center w-screen">
      <div className=" w-full min-h-5/6 py-8 flex items-center justify-center md:w-5/6 px-4 m-auto bg-orange-100">
        <div className="w-full p-5 flex flex-col gap-8 md:w-3/4 bg-white shadow-md rounded">
          {freqentAskedQ.map((q) => (
            <div key={q.id} className="md:px-10">
              <div onClick={() => hanldeShowContent(q.id)} className="w-full flex px-4 text-3xl justify-between font-normal ">
                <h1 className="font-semibold">{q.tittile}</h1>
                <div
                  
                  className="cursor-pointer"
                >
                  {isOpen === q.id ? (
                    <div>
                      <FaMinus />
                    </div>
                  ) : (
                    <div>
                      <FaPlus />
                    </div>
                  )}
                </div>
              </div>
              <AnimatePresence>
              {isOpen === q.id && (
                <motion.div
                key="box"
                  initial={{ height:"0", }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: "0", opacity:0 }}
                  transition={{ duration:duration }}
                  className="text-gray-800 overflow-hidden px-5 overflow-y-hidden text-3xl py-2 font-normal"
                >
                  {q.question}
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
