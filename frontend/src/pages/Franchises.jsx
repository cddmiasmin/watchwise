import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { TbTriangleFilled } from "react-icons/tb";

import Header from "../components/Header";

import { gradient } from "../utils/gradient ";
import { franchises } from "../data/franchises";
import { getTMDBImage } from "../utils/getTMDBImage";

const Franchises = () => {
    const [expanded, setExpanded] = useState(false);

    const getProgressColor = (percentage) => {
        if(percentage === 0) return 'bg-transparent';
        if(percentage <= 10) return 'bg-red-600';
        if(percentage <= 30) return 'bg-orange-500'
        if(percentage === 100) return 'bg-green-500';
        return 'bg-blue-600';
    }

    const percentage = Math.floor((11 / 12) * 100);
    const progress = percentage + '%';
    const progressColor = getProgressColor(percentage);

    return (
        <div className={`w-screen h-screen bg-background flex flex-col justify-star items-center overflow-x-hidden`}>
            <Header />
            <div className='w-full md:w-[70%] xl:w-[80%] h-full -mt-[50px] max-sm:px-5'>
                <div className='relative flex flex-col w-full'>                             
                    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat h-[15rem] md:h-[20rem] xl:h-[40rem]" style={{backgroundImage: `url(${getTMDBImage(franchises[0].backdrop)})`}}>
                        <div class="absolute inset-0" style={{backgroundImage: gradient}}/> 
                    </div>
                    <div className="absolute w-full flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-0 xl:gap-10 mt-[13rem] md:mt-[17rem] xl:mt-[31rem]">
                        <div className="xl:col-span-2">
                            <h1 className="font-nunito-sans font-bold text-white text-3xl">
                                {franchises[0].name.toLocaleUpperCase()}
                            </h1>
                            <div className="">
                                <p className={`text-dusty-sky text-justify mt-2 md:mr-8 xl:mr-0 ${expanded ? '' : 'line-clamp-3'}`}>
                                    {franchises[0].desc}
                                </p>
                                <button
                                    onClick={() => setExpanded(!expanded)}
                                    className="text-dusty-sky font-semibold hover:underline flex"
                                >
                                    {expanded ? "Esconder" : "Mostrar mais"}
                                </button>
                            </div>
                        </div>
                        <div className="font-bold xl:col-span-1 w-full flex flex-col gap-5 justify-center items-center">
                            <ul className="grid grid-rows-3 w-54 xl:w-70 h-26 md:h-28 xl:h-30 bg-midnight-gray rounded-sm">
                                <li className="flex justify-center items-center cursor-pointer">
                                    {
                                        franchises[0].favorite
                                        ? 
                                            <div className="flex flex-row items-center gap-1"> 
                                                <IoHeartSharp className="text-red-800"/> 
                                                <span className="text-white font-normal text-xs">
                                                    Você ama essa franquia
                                                </span> 
                                            </div>
                                        : 
                                            <div className="flex flex-row items-center gap-1 text-pastel-sky hover:text-white"> 
                                                <IoHeartSharp className=""/> 
                                                <span className="font-normal text-xs">
                                                    Ama essa franquia?
                                                </span> 
                                            </div>
                                    }
                                </li>
                                <li className="cursor-pointer flex justify-center items-center border-y-1 border-background font-normal text-xs text-pastel-sky hover:text-white">
                                    Remover franquia...
                                </li>
                                <li className="cursor-pointer flex justify-center items-center font-normal text-xs text-pastel-sky hover:text-white">
                                    Compartilhe um story
                                </li>
                            </ul>
                            <div className="flex flex-col w-54 xl:w-70 border border-shadow-gray rounded-sm">
                                <div className="grid grid-cols-2 p-2">
                                    <div className="flex flex-col justify-center">
                                        <span className="text-dusty-sky font-normal text-xs">Você assistiu</span>
                                        <span className="text-dusty-sky font-normal text-xs">11 de 12</span>
                                    </div>
                                    <div className="flex flex-row justify-end items-star">
                                        <span className="text-dusty-sky font-normal text-4xl">{percentage}</span>
                                        <span className="text-dusty-sky font-normal text-base">%</span>
                                    </div>
                                </div>
                                <div className="w-full h-1 bg-dusty-sky rounded-b-sm">
                                    <div className={`rounded-b-sm ${progressColor} h-full`} style={{width: progress}}/>
                                </div>
                            </div>
                            <div className="mt-5">
                                <span className='font-nunito-sans text-dusty-sky text-xs md:text-base'>
                                    MARCADORES
                                </span>
                                <div className='w-full h-[1px] bg-dusty-sky'/>
                                <div className='mt-2 flex flex-wrap gap-2'>
                                    {
                                        franchises[0].keywords.map((word) => (
                                            <div className="flex flex-row justify-center items-center">
                                                <span className="bg-midnight-gray text-dusty-sky cursor-pointer hover:text-white font-medium px-2 rounded-l-sm">
                                                    {word.name}
                                                </span>
                                                <TbTriangleFilled className="text-midnight-gray rotate-90 text-[1.6rem] -ml-1.5 "/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Franchises;