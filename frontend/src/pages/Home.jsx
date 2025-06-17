import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { user } from '../data/user';

const Home = () => {
  return (
    <div 
      className={`w-screen min-h-screen flex flex-col justify-star items-center`}
      style={{background: `#14181c url('/content-bg.png') repeat-x`}}
    >      
      <div className="bg-midnight-slate w-full h-fit flex justify-center">
        <Header bgColor={true}/>
      </div>
      <div className='w-full mt-5 md:w-[62.5%] xl:w-[70%] h-full max-sm:px-5 py-4'>
        <div className='w-full flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-0'>
          <div className='w-full flex flex-col xl:flex-row items-center xl:items-star gap-2 xl:gap-4'>
            <img 
              src={user.icon} 
              alt={`${user.username}'icon`}
              className='size-20 rounded-full' 
            />
            <div className='flex flex-col items-center xl:items-start '>
              <h1 className='text-white font-nunito-sans font-bold  text-xl xl:text-2xl'>
                {user.name}
              </h1>
              <span className='text-dusty-sky font-nunito-sans font-thin text-xs xl:text-sm'>
                {`@${user.username}`}
              </span>
            </div>
          </div>
          <div className='w-full flex flex-col items-center xl:flex-row gap-6 xl:gap-0'>
            <div className='max-xl:w-full flex flex-row h-14 justify-evenly xl:gap-4'>
              <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-white font-merriweather font-bold text-lg xl:text-xl'>
                  814
                </h1>
                <span className='text-dusty-sky font-nunito-sans font-thin text-xs xl:text-sm'>
                  WATCHLIST
                </span>
              </div>
              <div className='h-full w-[1px] bg-midnight-blue'/>
              <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-white font-merriweather font-bold text-lg xl:text-xl'>
                  12
                </h1>
                <span className='text-dusty-sky font-nunito-sans font-thin text-xs xl:text-sm'>
                  FOLLOWING
                </span>
              </div>
              <div className='h-full w-[1px] bg-midnight-blue'/>
              <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-white font-merriweather font-bold text-lg xl:text-xl'>
                  10
                </h1>
                <span className='text-dusty-sky font-nunito-sans font-thin text-xs xl:text-sm'>
                  DOWNLOADS
                </span>
              </div>
            </div>
            <div className='max-xl:w-8/12 flex flex-row h-14 justify-evenly xl:gap-4'>
              <div className='max-xl:hidden xl:ms-4 h-full w-[1px] bg-midnight-blue'/>
              <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-white font-merriweather font-bold text-lg xl:text-xl'>
                  4
                </h1>
                <span className='text-dusty-sky font-nunito-sans font-thin text-xs xl:text-sm'>
                  JORNALS
                </span>
              </div>
              <div className='h-full w-[1px] bg-midnight-blue'/>
              <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-white font-merriweather font-bold text-lg xl:text-xl'>
                  7
                </h1>
                <span className='text-dusty-sky font-nunito-sans font-thin text-xs xl:text-sm'>
                  FRANCHIESES
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex flex-col'>
          <div className='w-full flex flex-row justify-between items-center'>
            <span className='font-nunito-sans text-dusty-sky text-xs md:text-base'>
              DIARY
            </span>
            <button className='text-nunito-sans text-dusty-sky hover:text-white cursor-pointer text-xs md:text-base'>
              15
            </button>
          </div>
          <div className='w-full h-[1px] bg-dusty-sky'/>
          <div className="flex flex-row mt-2 gap-4">
            <div className='relative'>
              <div className='absolute size-10'>
                <img src="/public/calendar-silhouette.png" className='size-full'/>
              </div>
              <span className='absolute text-background text-xs font-bold font-nunito-sans ms-2 mt-4.5'>JUN</span>
            </div>
            <div className="flex flex-col ms-8">
              <div className='flex flex-row gap-2'>
                <span className='text-[#667788] font-nunito-sans'>15</span>
                <span className='text-dusty-sky font-nunito-sans cursor-pointer hover:text-white'>Perfect Blue</span>
              </div>
              <div className='flex flex-row gap-2'>
                <span className='text-[#667788] font-nunito-sans'>13</span>
                <span className='text-dusty-sky font-nunito-sans cursor-pointer hover:text-white'>The Assessment</span>
              </div>
              <div className='flex flex-row gap-2'>
                <span className='text-[#667788] font-nunito-sans'>10</span>
                <span className='text-dusty-sky font-nunito-sans cursor-pointer hover:text-white'>Donkey Skin</span>
              </div>
              <div className='flex flex-row gap-2'>
                <span className='text-[#667788] font-nunito-sans'>03</span>
                <span className='text-dusty-sky font-nunito-sans cursor-pointer hover:text-white'>Happy Gilmore</span>
              </div>
              <div className='flex flex-row gap-2'>
                <span className='text-[#667788] font-nunito-sans'>02</span>
                <span className='text-dusty-sky font-nunito-sans cursor-pointer hover:text-white'>Christine</span>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
