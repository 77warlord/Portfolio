import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600 md:font-bold'>Hello... I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-yellow-300'>
          ARYAN
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-yellow-500'>
          I'm developing  full-stack web apps .. check out..
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] md:font-bold'>
          I’m an aspiring full-stack developer specializing in building exceptional digital experiences. Currently, I’m focusing on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-yellow-600 hover:text-black  md:font-bold'>
            View My Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
