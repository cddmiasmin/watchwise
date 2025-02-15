import React from 'react'

const FrontSlide = ({ movie, setHover }) => {
  return (
    <div className='z-40 h-full w-50vh flex justify-center items-center' onMouseLeave={() => setHover(-1)}>   
        <div className='w-[35vh] h-[46vh] absolute ml-10 mt-5 rotate-[5deg]'>
            <img 
                className='size-full' 
                src='\public\video_cassette_tape.png'
            />
        </div>
        <div className='w-[32vh] h-[48vh] absolute mr-20 rotate-[-5deg]'>
            <img 
                className='size-full' 
                src={movie.poster}
            />
        </div>
    </div>
  )
}

export default FrontSlide
