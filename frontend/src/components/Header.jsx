import { IoMenu, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { user } from "../data/user";

import imgLogo from '/public/logo.png';

const Header = () => {
    return (
        <div className="w-full md:w-[62.5%] xl:w-[70%] h-[50px] flex flex-row justify-between items-center max-sm:px-3 z-1">
            <div className="h-[40px] w-[3rem] md:w-[3.5rem] flex items-center order-1 xl:order-0">
                <img
                    className="size-full" 
                    src={imgLogo} 
                    alt="Logo Watch Wise"
                />
            </div>
            <div className="order-0 xl:order-1 h-full flex">
                <div className="max-xl:hidden h-full flex flex-row justify-center items-center gap-4">
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <img
                            className="size-[1.5rem] border border-white rounded-full"  
                            src={user.icon}
                            alt={`${user.name}'s icon`}
                        />
                        <span className="font-nunito-sans font-extrabold text-white text-sm">
                            {user.username}
                        </span>
                        <IoIosArrowDown className="text-white"/>
                    </div>
                    <div className="h-full text-white flex gap-3">
                        <button 
                            className="font-nunito-sans font-extrabold text-sm"
                            onClick={() => console.log('oi')}
                        >
                            WATCHLIST
                        </button>
                        <button 
                            className="font-nunito-sans font-extrabold text-sm"
                            onClick={() => console.log('oi')}
                        >
                            STREAMINGS
                        </button>
                        <button 
                            className="font-nunito-sans font-extrabold text-sm"
                            onClick={() => console.log('oi')}
                        >
                            AGENDA
                        </button>
                    </div>
                    <div className="h-[28px] w-[15rem] bg-[#2c3440] flex justify-end items-center px-2 rounded-sm">
                        <IoSearch className="text-white"/>
                    </div>
                </div>
                <div className="xl:hidden flex h-full w-[1.5rem]">
                    <IoMenu className="text-white size-full"/>
                </div>
            </div>
            <div className="xl:hidden order-2 h-full flex">
                <div className="xl:hidden h-full flex flex-row justify-center items-center gap-3">
                <div className="flex flex-row gap-1 justify-center items-center">
                        <img
                            className="size-[1.6rem] border border-white rounded-full"  
                            src={user.icon}
                            alt={`${user.name}'s icon`}
                        />
                        <IoIosArrowDown className="text-white"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header
