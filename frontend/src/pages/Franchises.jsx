import { useState } from "react";
import _ from 'lodash';
import { IoHeartSharp } from "react-icons/io5";
import { TbTriangleFilled } from "react-icons/tb";

import Header from "../components/Header";

import { gradient } from "../utils/gradient ";
import { franchises } from "../data/franchises";
import { getTMDBImage } from "../utils/getTMDBImage";

const Franchises = () => {
    const franchise = franchises[0];
    const [expanded, setExpanded] = useState(false);

    const getFranchiseRatingInStars = () => {
        const voteAverages = _.map(franchise.items, 'vote_average');
        const averageOutOfTen = _.mean(voteAverages);
        const averageOutOfFive = _.round(averageOutOfTen * 0.5, 1);
        return averageOutOfFive;
    };

    const percentage = Math.floor((11 / 12) * 100);
    const progress = percentage + '%';
    const franchiseRating = getFranchiseRatingInStars();

    return (
        <div className={`w-screen h-screen bg-background flex flex-col justify-star items-center overflow-x-hidden`}>
            <Header />
            <div className='w-full md:w-[70%] xl:w-[80%] h-full -mt-[50px] max-sm:px-5'>
                <div className='relative flex flex-col w-full'>                             
                    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat h-[15rem] md:h-[20rem] xl:h-[40rem]" style={{backgroundImage: `url(${getTMDBImage(franchise.backdrop)})`}}>
                        <div class="absolute inset-0" style={{backgroundImage: gradient}}/> 
                    </div>
                    <div className="absolute w-full flex flex-col mt-[11rem] md:mt-[15rem] xl:mt-[30rem]">
                        <div className="w-full flex flex-col justify-center items-center gap-1">
                            {
                                franchise.logo
                                ? <img className='w-[40%] xl:w-[20%]' src={getTMDBImage(franchise.logo)} alt={franchise.name} />
                                : <h1 className="font-merriweather font-bold text-white text-3xl">{franchise.name}</h1>
                            }
                            <div className="flex flex-row gap-2">
                                {
                                    franchise.genre.map((genre) => (
                                        <span className="text-dusty-sky text-xs font-nunito-sans font-light">{genre.toUpperCase()}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className={`text-dusty-sky text-xs md:text-sm xl:text-base text-justify font-merriweather mt-2 md:mr-8 xl:mr-0 ${expanded ? '' : 'max-xl:line-clamp-2'}`}>
                                {franchises[0].desc}
                            </p>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-dusty-sky font-semibold hover:underline flex xl:hidden text-xs md:text-sm xl:text-base"
                            >
                                {expanded ? "Esconder" : "Mostrar mais"}
                            </button>
                        </div>
                        {/* <div className="mt-5 flex flex-wrap gap-10 justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-dusty-sky text-4xl font-extrabold font-nunito-sans">{franchise.items.length}</span>
                                <span className="text-dusty-sky text-xs font-light">FILMS</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-dusty-sky text-4xl font-extrabold font-nunito-sans">{franchiseRating}</span>
                                <span className="text-dusty-sky text-xs font-light">RATING</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-dusty-sky text-4xl font-extrabold font-nunito-sans">18h26</span>
                                <span className="text-dusty-sky text-xs font-light">RUNTIME</span>
                            </div>
                        </div> */}
                        <div className="mt-5 flex flex-col-reverse xl:grid xl:grid-cols-3 gap-5 md:gap-0 xl:gap-10">
                            <div className="xl:col-span-2">
                                <div className='w-full h-[1px] bg-dusty-sky'/>
                                    iasmin
                                <div className='w-full h-[1px] bg-dusty-sky'/>
                                <div className="mt-2 flex flex-wrap gap-2 justify-center items-center">
                                    {
                                        franchise.items.map((item) => (
                                            <div className='w-[125px] h-[187px] md:w-[6.5rem] md:h-[11rem] xl:w-[8rem] xl:h-[13rem] rounded overflow-hidden'>
                                                <img 
                                                    src={getTMDBImage(item.poster_path)}
                                                    alt={item.title}
                                                    className='size-full '
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="">
                                Thiago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Franchises;