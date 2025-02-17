import { useState } from 'react'

import Header from '../components/Header';
import { colorBackground } from '../utils/colors';

const Movie = () => {
    const [active, setActive] = useState(true);
    
    return (
        <div className={`w-screen h-screen bg-background flex ${active ? 'justify-star' : 'justify-center'} items-center`}>
            {
                !active
                ?
                    <h1 className='font-bold text-white'>Carregando...</h1>
                :
                    <>
                        <div className='w-full h-full grid grid-rows-14 justify-star'>
                            <Header />
                            <div className='flex justify-center items-center size-full row-span-13 relative'>
                                <div className='grid grid-rows-4 w-full h-full pt-5 absolute'>
                                    <div className='row-span-3 relative'>
                                        <img className='absolute size-full' src='https://image.tmdb.org/t/p/original/Ezr1StPIK9xMqXeTNBXbrnbgu4.jpg'/>
                                        <div className='absolute size-full bg-linear-to-b from-transparent to-background' />
                                    </div>
                                    <div className='bg-background size-full flex justify-center'/>
                                </div>
                                <div className='absolute bg-background flex flex-row w-[70%] mt-25 -mb-20 rounded-t-lg py-8 px-12'>
                                    <div className='w-3xs mr-10'>
                                        <img className='w-3xs h-[24rem] rounded-sm' alt='Poster Funny Face' src='https://image.tmdb.org/t/p/original/1CW8Wn2itBQ7wACBQHpOyIbPpmD.jpg' />
                                    </div>
                                    <div className='flex flex-col max-h-18 justify-star'>
                                        <div className='w-full flex items-end'>
                                            <span className='font-lora font-semibold text-white text-3xl'>Cinderela em Paris</span>
                                            <span className='font-roboto font-thin text-[#ddeeff] ml-2'>1957</span>
                                        </div>
                                        <div className='w-full flex items-end'>
                                            <span className='font-lora font-normal italic text-[#ddeeff] text-lg'>"Funny Face"</span>                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>            
            }
        </div>
    )
}

export default Movie