import React from 'react'

const SideSlide = ({ movie, index, setHover }) => {
  return (
    <img 
      className='inline-block rotate-[270deg] scale-[1.35] w-[16rem] h-[5rem] object-cover' 
      onMouseEnter={() => setHover(index)}
      src={movie.backgroundImage} 
      alt={movie.name}
      index={index}
    /> 
  )
}

export default SideSlide
