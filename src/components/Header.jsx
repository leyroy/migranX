import React, { useEffect, useState } from "react";
import logoText from "../Assets/svgs/logoText.webp";
import logo from "../Assets/logo.webp";

function Header({sectionRef}) {
  const [isObserve, setisObserve] = useState(false)
  useEffect(()=>{
    const observer = new IntersectionObserver(([entries])=>{
      setisObserve(entries.isIntersecting)
    },{
      root: null, 
    rootMargin: '50px', 
    threshold: 0.1
    })
    if(sectionRef.current){
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  },[])
  return (
    <head className={`fixed z-20 w-screen ${isObserve && "bg-black bg-opacity-60"} flex items-center justify-between top-0 ring-0 px-5 md:px-16 py-2`}>
        <img src={logoText} alt="" className="h-16 hidden md:block w-30 sm:w-auto cursor-pointer" />
        <img src={logo} alt="" className="h-16 mr-auto block md:hidden w-30 sm:w-auto cursor-pointer" />
      <div className="flex gap-4 text-lg">
        <button className="py-2 hover:text-white hover:bg-black duration-200 px-6 rounded-full bg-white text-black font-semibold">
          Login
        </button>
        <button className="py-2 hover:text-white hover:bg-black duration-200  px-6 rounded-full bg-orange-400 text-black font-semibold">
          SignUp
        </button>
      </div>
    </head>
  );
}

export default Header;
