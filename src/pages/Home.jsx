import React, { useState } from 'react'

import Slide from '../components/Slide';
import Header from '../components/Header';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Home = () => {

  const [active, setActive] = useState(true);

  const movies = [
    {
      name: 'Anora',
      backgroundImage: 'https://image.tmdb.org/t/p/original/kEYWal656zP5Q2Tohm91aw6orlT.jpg',
      logoImage: 'https://upload.wikimedia.org/wikipedia/fr/a/aa/Anora_%28film%29.png',
      release: '2024'
    },
    {
      name: 'A SUBSTANCIA',
      backgroundImage: 'https://image.tmdb.org/t/p/original/a6UereKLAQQZ8QO6yWMCXZvwib3.jpg',
      logoImage: 'https://images.mubicdn.net/images/release/splash_page/157/cache-993035-1724678353/title_image_en_us-original.png?size=800x',
      release: '2024'
    },
    {
      name: 'Queer',
      backgroundImage: 'https://image.tmdb.org/t/p/original/7bUYzlDz8eel1BVL1Y0YcF9NQmd.jpg',
      logoImage: 'https://images.mubicdn.net/images/artworks/754025/cache-754025-1736857297/images-original.png',
      release: '2024'
    },
    {
      name: 'Pânico VI',
      backgroundImage: 'https://image.tmdb.org/t/p/original/44immBwzhDVyjn87b3x3l9mlhAD.jpg',
      logoImage: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTgK0y1OTfRfrDHTX2jLezKNIxATLMdfYzqHjVDPQ0piuan_cBqmD3ZaXexaXVLfAecgZqvzGBQ6FlUcSRvQiJviyoP8AeTyogedZoz-h-zl.png?r=fe0',
      release: '2023'
    },
    {
      name: 'Premonição',
      backgroundImage: 'https://image.tmdb.org/t/p/original/6KDLAU9OnA0FhXP1av8jqavCGG9.jpg',
      logoImage: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/0ae3ced5-06ed-444d-b29f-4157e7871fa1/76d2420f-7773-11ef-bc6e-0affdffa9ba1?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=4320',
      release: '202'
    }
  ];

  return (
    <div className={`w-screen h-screen bg-background flex flex-col ${active ? 'justify-star' : 'justify-center'} items-center`}>
      {
        !active
        ?
          <h1 className='font-bold text-white'>Carregando...</h1>
        :
          <>
            <div className='w-full h-dvh'>
              <div className='w-full h-full z-0 overflow-hidden absolute flex justify-center items-center'>
                <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  spaceBetween={40}
                  slidesPerView={1.4}
                  loop={true}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="flex w-full h-[80%]"
                >
                  {
                    movies.map((movie, index) => (
                      <SwiperSlide index={index}>
                        <Slide movie={movie} index={index}/>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>  
              <div className='w-full overflow-hidden absolute'>
                <Header />
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default Home
