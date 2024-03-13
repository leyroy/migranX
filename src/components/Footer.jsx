import React, { useRef } from 'react'
import logo from "../Assets/logo.webp"
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaArrowDown } from 'react-icons/fa6';

export default function Footer() {
    //function to scroll down to the buttom
    const ref = useRef()
    const crolldown = () =>{
      window.scrollTo({
        top:ref.current.offsetTop, 
        behavior:"smooth"
      })
    }
  return (
    <div ref={ref} className='flex flex-col gap-10 font-semibold w-full h-auto items-center justify-center py-10 bg-black text-white'>
        <img src={logo} alt="" className='mt-12' />
        <h2 className='flex text-2xl  px-3 md:px-0 md:w-2/6 text-center'>Our job is to make you experience home away from home.</h2>
        <div className='flex items-center my-5 gap-6 md:w-3/4 justify-between text-xl mt-4 flex-col md:flex-row px-2 '>
            <div className='hover:text-gray-300 duration-200 ease-in-out cursor-pointer'>About Us</div>
            <div className='hover:text-gray-300 duration-200 ease-in-out cursor-pointer'>Sign Up to Deliver</div>
            <div className='hover:text-gray-300 duration-200 ease-in-out cursor-pointer'>Become a Vendor</div>
            <div className='hover:text-gray-300 duration-200 ease-in-out cursor-pointer'>FAQs</div>
            <div className='hover:text-gray-300 duration-200 ease-in-out cursor-pointer'>Contact Us</div>
            <div className='hover:text-gray-300 duration-200 ease-in-out cursor-pointer'>Privicy Policy</div>
            <div className='hover:text-gray-300 duration-200 ease-in-out cursor-pointer'>Terms asd Conditions</div>
        </div>
        <div onClick={crolldown} className="fixed text-slate-900 z-10 bottom-20 cursor-pointer p-1 rounded-full font-extrabold right-5 text-5xl bg-orange-500"> 
<FaArrowDown/>
</div>
        <div className='flex items-center gap-5 mt-auto justify-between flex-col md:flex-row md:w-3/4 text-gray-200 px-3 md:px-0'>
            <div>&copy; 2023 MigranX. All rights reserved.</div>
            <div className='flex text-white items-center justify-center text-4xl gap-4'>
                <CiInstagram className='cursor-pointer'/>
                <CiFacebook  className='cursor-pointer'/>
                <CiTwitter  className='cursor-pointer'/>
                
            </div>
        </div>
    </div>
  )
}
