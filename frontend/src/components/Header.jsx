import { useState } from "react";

import { IoMenu, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

import { user } from "../data/user";

import imgLogo from '/public/logo.png';

import Menu from "./Menu";
import Log from "./Log";

const Header = () => {

    const [openMenu, setMenu] = useState(false);
    const [openLog, setLog] = useState(false);

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
                    <div className="flex">
                        <IoSearch className="text-white text-base"/>
                    </div>
                    <button
                        onClick={() => setLog(true)} 
                        className="flex flex-row justify-center items-center gap-1 cursor-pointer bg-[#00ac1c] hover:bg-[#009318] py-1.5 px-2.5 max-xl:py-1 xl:px-4 rounded-sm"
                    >
                        <FaPlus className="text-[#f4fcf0] text-xs font-bold"/>
                        <span className="text-[#f4fcf0] font-nunito-sans font-bold text-sm">LOG</span>
                    </button>
                </div>
                <button 
                    onClick={() => setMenu(true)}
                    className="xl:hidden flex cursor-pointer h-full w-[1.5rem]"
                >
                    <IoMenu className="text-white size-full"/>
                </button>
            </div>
            <div className="xl:hidden order-2 flex">
                <button
                    onClick={() => setLog(true)} 
                    className="flex flex-row justify-center items-center gap-1 cursor-pointer bg-[#00ac1c] hover:bg-[#009318] py-1.5 px-2.5 max-xl:py-1 xl:px-4 rounded-sm"
                >
                    <FaPlus className="text-[#f4fcf0] text-xs font-bold"/>
                    <span className="text-[#f4fcf0] font-nunito-sans font-bold text-sm">LOG</span>
                </button>
            </div>
            <Menu openMenu={openMenu} setMenu={setMenu} />
            <Log openLog={openLog} setLog={setLog} />
        </div>
    );
}

export default Header
