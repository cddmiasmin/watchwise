import React from 'react'

const Slide = ({ movie, index }) => {
  return (
    <div index={index} className='flex bg-black justify-center items-end size-full rounded-md overflow-hidden'>
      <div className='size-full opacity-80'>
        <img className='size-full' src={movie.backgroundImage} alt={movie.name} />
      </div>
      <img className='max-h-[30%] max-w-[30%] absolute mb-[5vh]' src={movie.logoImage} alt={movie.name}/>
    </div>
  )
}

export default Slide
