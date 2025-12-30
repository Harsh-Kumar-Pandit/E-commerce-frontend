import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import aurexmodel from '../assets/video/aurexmodel.mp4'
import model from '../assets/video/model.mp4'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        <div className='relative w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
           <video
        src={model}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 h-full object-cover hover:scale-105 p-3"
      />
       <div className="z-10 text-[#414141]">
  
  <div className="flex items-center gap-2">
    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
    <p className="font-semibold text-sm md:text-base tracking-wide">
      OUR BESTSELLERS
    </p>
  </div>

  <h1 className="roboto-font text-4xl lg:text-5xl font-bold leading-tight py-3">
    LATEST ARRIVALS
  </h1>

  <div className="flex items-center gap-2">
    <p className="font-bold text-sm md:text-base tracking-wide">
      EXPLORE COLLECTION
    </p>
    <p className="w-8 h-[2px] md:w-11 bg-[#414141]"></p>
  </div>

</div>

        </div >
        {/* Hero Right Side */}
        <div className="relative sm:w-1/2 h-[500px] overflow-hidden">

             <video
        src={aurexmodel}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      </div>
    
    </div>
  )
}

export default Hero
