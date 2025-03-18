import React, { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import SideSlide from './SideSlide';
import FrontSlide from './FrontSlide';

const Slides = () => {

    const [hover, setHover] = useState(-1);

    const movies = [
        {
          name: 'Anora',
          backgroundImage: 'https://image.tmdb.org/t/p/original/kEYWal656zP5Q2Tohm91aw6orlT.jpg',
          poster: 'https://image.tmdb.org/t/p/original/xmFdNzbUiT5XmH6rbIVGYDQHGeo.jpg'
        },
        {
          name: 'Duna: Parte Dois',
          backgroundImage: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
          poster: 'https://image.tmdb.org/t/p/original/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg'
        },
        {
          name: 'Sonic 3: O Filme',
          backgroundImage: 'https://image.tmdb.org/t/p/original/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg',
          poster: 'https://image.tmdb.org/t/p/original/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg'
        },
        {
          name: 'Divertida Mente 2',
          backgroundImage: 'https://image.tmdb.org/t/p/original/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg',
          poster: 'https://image.tmdb.org/t/p/original/xGvz7nlGQeePcVOpAzOcHsC7kRt.jpg'
        },
        {
          name: 'Wicked',
          backgroundImage: 'https://image.tmdb.org/t/p/original/uVlUu174iiKhsUGqnOSy46eIIMU.jpg',
          poster: 'https://image.tmdb.org/t/p/original/qcaKkLwIXCAxJtpetVYHniCvLZj.jpg'
        },
        {
          name: 'Coringa: Delírio a Dois',
          backgroundImage: 'https://image.tmdb.org/t/p/original/uGmYqxh8flqkudioyFtD7IJSHxK.jpg',
          poster: 'https://image.tmdb.org/t/p/original/jNttwl5CYgnxNwQ8157BxyYJqu2.jpg'
        },
        {
          name: 'Acompanhante Perfeita',
          backgroundImage: 'https://image.tmdb.org/t/p/original/sc1abgWNXc29wSBaerrjGBih06l.jpg',
          poster: 'https://image.tmdb.org/t/p/original/bjp5zXaIG5tOCtyzUzuf4lsdZub.jpg'
        },
        // {
        //   name: 'Sorria 2',
        //   backgroundImage: 'https://image.tmdb.org/t/p/original/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg',
        //   poster: 'https://image.tmdb.org/t/p/original/tPGaWmxdPumgOAzbGHu8aRJTaXx.jpg'
        // },   
        // {
        //   name: 'Pulp Fiction: Tempo de Violência',
        //   backgroundImage: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
        //   poster: 'https://image.tmdb.org/t/p/original/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg'
        // },
        // {
        //   name: 'Homem-Aranha',
        //   backgroundImage: 'https://image.tmdb.org/t/p/original/qJzloL8O9YHhiWBrhlPfKAtZu2I.jpg',
        //   poster: 'https://image.tmdb.org/t/p/original/RbZQL5hXmydecu82UHw9ZGyytB.jpg'
        // },
        // {
        //   name: 'Terrifier 3',
        //   backgroundImage: 'https://image.tmdb.org/t/p/original/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg',
        //   poster: 'https://image.tmdb.org/t/p/original/gU9ubNnaDKYBxs1DCSfiUIqHSMR.jpg'
        // },
        // {
        //   name: 'Babygirl',
        //   backgroundImage: 'https://image.tmdb.org/t/p/original/hctfNoMpQGfn3VXdBYb9p0P5bT5.jpg',
        //   poster: 'https://image.tmdb.org/t/p/original/47AmmkY5Vo4ODLueXUksEin0aWw.jpg'
        // },
    ];

    return (
      <div className='row-span-11 flex flex-row justify-center items-center px-4'>
        {/* {
          movies.map((movie, index) => (
            <SideSlide movie={movie} index={index}/>
          ))
        } */}
        {/* <SideSlide movie={movies[0]}/> */}
        <div className='grid grid-rows-4 size-full'>
          <div className='row-span-3 size-full flex flex-row justify-center items-center'>
            {              
              movies.map((movie, index) => (            
                hover === index
                ? <FrontSlide movie={movie} index={index} setHover={setHover}/>
                : <SideSlide movie={movie} index={index} setHover={setHover}/>              
              ))
            }
          </div>
          <div className='size-full flex justify-between items-center'>
            <IoIosArrowBack className='text-white text-2xl'/>
            <div className='flex flex-col justify-center items-center gap-1'>
              <p className='text-white font-roboto text-2xl font-black'>Anora</p>
              <p className='text-main font-roboto text-md font-medium'>Sean Kaber</p>
              <p className='text-white font-roboto text-sm font-thin'>2024</p>
            </div>
            <IoIosArrowForward className='text-white text-2xl'/>
          </div>
        </div>
      </div>
    )
}

export default Slides
