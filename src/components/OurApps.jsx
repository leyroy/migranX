import React from 'react'
import appStore from "../Assets/svgs/appstore.svg";
import playStore from "../Assets/svgs/playstore.svg";
import blob2 from "../Assets/svgs/blob2.svg";
import blob3 from "../Assets/svgs/blob3.svg";
import feet1 from "../Assets/svgs/feat1.svg";
import fleat1 from "../Assets/svgs/app.svg";
import ride from "../Assets/svgs/ride.svg";
import servers from "../Assets/svgs/servers.svg";

export default function OurApps() {
  return (
    <div className="  bg-orange-50 py-6 w-full  ">
        <div className=" w-full h-[88vh] gap-3 flex items-center justify-center relative">
            <img src={blob3} alt="" className='absolute left-0 top-0' />
            <img src={blob2} alt="" className='absolute bottom-0 h-20' />
            <img src={blob2} alt="" className='absolute right-6  rotate-180 md:w-64 w-56 top-0 md:h-56' />
                <div className=" flex items-center justify-center pl-4 flex-col gap-5">
            <div className=" flex flex-col items-start justify-center md:justify-start w-96">
                <h1 className='font-semibold text-xl text-orange-400'>DOWNLOAD APP</h1>
                <p className='text-4xl text-center md:text-start font-semibold md:w-auto'>Get Started With MigranX <br /> Today!</p>
            </div>
            <div className='flex gap-20'>
              <img src={appStore} alt="" className='cursor-pointer' />
              <img src={playStore} alt="" className='cursor-pointer'/>
            </div>
                </div>
                <div className=' flex items-center h-full justify-center'>
                <img src={fleat1} alt="" className='hidden -mr-40 h-full md:block' />
            
                </div>
        </div>
        <div className='my-10 py-10 flex flex-col items-center justify-center gap-4'>
        <h1 className='font-semibold m-auto text-2xl text-orange-400'>WHAT WE OFFER</h1>
        <p className='text-4xl text-center md:text-start m-auto font-bold md:w-auto'>Your Delivery Partner For Everything Culture</p>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className='flex w-80 flex-col items-center justify-center'>
                <img src={feet1} alt="" />
                <h2 className='text-3xl my-2 font-bold'>Easy To Order</h2>
                <p className='px-8 text-2xl font-medium text-center'>You only need a few steps in ordering food.</p>
            </div>
            <div className='flex w-80 flex-col items-center justify-center'>
                <img src={ride} alt="" />
                <h2 className='text-3xl my-2 font-bold'>Easy To Order</h2>
                <p className='px-8 text-2xl font-medium text-center'>You only need a few steps in ordering food.</p>
            </div>
            <div className='flex w-80 flex-col items-center justify-center'>
                <img src={servers} alt="" />
                <h2 className='text-3xl my-2 font-bold'>Easy To Order</h2>
                <p className='px-8 text-2xl font-medium text-center'>You only need a few steps in ordering food.</p>
            </div>
        </div>
        </div>
  </div>
  )
}
