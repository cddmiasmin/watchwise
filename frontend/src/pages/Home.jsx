import { useState, useEffect } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Slides from '../components/Slides';
import Tabs from '../components/Tabs';
import { background } from '../data/background';
import { gradient } from '../utils/gradient ';
import { popularesNoLetterboxd } from '../data/home';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
  const getOrientation = () => screen.width|| 'unknown';
 
  const [loading, setloading] = useState(true);
  const [orientation, setOrientation] = useState(getOrientation());
  const [swiperStyle, setSwiperStyle] = useState({slidesPerView: 'auto', spaceBetween: 0});

  useEffect(() => {
    const handleChange = () => {
      setOrientation(getOrientation());
    };

    handleChange();
  }, []);

  useEffect(() => {
    if(orientation <= 640) setSwiperStyle({ slidesPerView: 4, spaceBetween: 10 });
    else if(orientation <= 768) setSwiperStyle({ slidesPerView: 4, spaceBetween: 10 });
    else setSwiperStyle({ slidesPerView: 8, spaceBetween: 90 });
    console.log(orientation)
  }, [orientation]);

  return (
    <div className={`w-screen h-screen bg-background flex flex-col justify-star items-center overflow-x-hidden`}>
      <Header />
      <div className='w-full md:w-[70%] xl:w-[80%] h-full -mt-[50px] max-sm:px-5'>
        <div className='relative flex flex-col w-full h-[15rem] md:h-[20rem] xl:h-[40rem]'>                             
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${background.img})`}}>
            <div class="absolute inset-0" style={{backgroundImage: gradient}}/> 
          </div>
          <div class="relative z-10 mt-[12rem] md:mt-[16rem] xl:mt-[32rem] flex flex-col justify-center items-center">
            <h1 class="text-lg md:text-xl xl:text-4xl font-bold text-white font-merriweather">Acompanhante Perfeita</h1>
            <h1 class="text-lg md:text-xl xl:text-4xl font-bold text-white font-merriweather">2025</h1>
            <p class="text-xs md:text-sm xl:text-base font-nunito-sans font-normal text-dusty-sky">FILME DO DIA</p>
          </div>
        </div>
        <div className='max-xl:mt-10'>
          <div className='w-full flex flex-row justify-between items-center'>
            <span className='font-nunito-sans text-dusty-sky text-xs md:text-base'>
              POPULARES NO LETTERBOXD
            </span>
            <span className='text-nunito-sans text-dusty-sky text-xs md:text-base'>
              MAIS
            </span>
          </div>
          <div className='w-full h-[1px] bg-dusty-sky'/>
          <div className='w-full mt-3 flex flex-row'>
            <Swiper
              slidesPerView={swiperStyle.slidesPerView}
              spaceBetween={swiperStyle.spaceBetween}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {
                popularesNoLetterboxd.map((movie, index) => (
                  <SwiperSlide key={index}>
                    <div className='bg-red-900 w-[5rem] h-[9rem] md:w-[6.5rem] md:h-[11rem] xl:w-[8rem] xl:h-[13rem] rounded overflow-hidden'>
                      <img 
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        className='size-full object-cover'
                      />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
