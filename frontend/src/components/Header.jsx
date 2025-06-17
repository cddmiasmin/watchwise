import { useState } from "react";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";

import imgLogo from '/public/logo.png';

import Menu from "./Menu";

const Header = () => {
    const [openMenu, setMenu] = useState(false);

    return (
        <div className="w-full md:w-[62.5%] xl:w-[70%] h-[auto] flex flex-col justify-center items-center max-sm:px-3 z-1">
            <div className="w-full h-[50px] flex flex-row justify-between items-center">
                <div className="h-[40px] w-[3rem] md:w-[3.5rem] flex items-center">
                    <img
                        className="size-full" 
                        src={imgLogo} 
                        alt="Logo Watch Wise"
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className='xl:hidden' onClick={() => console.log('log')}>
                        <AiOutlinePlus className="text-[#f4fcf0] text-2xl"/>
                    </button>
                    <button
                        onClick={() => console.log('log')} 
                        className="max-xl:hidden flex flex-row justify-center items-center gap-1 cursor-pointer bg-[#00ac1c] hover:bg-[#009318] py-1.5 px-2.5 max-xl:py-1 xl:px-4 rounded-sm"
                    >
                        <FaPlus className="text-[#f4fcf0] text-xs font-bold"/>
                        <span className="text-[#f4fcf0] font-nunito-sans font-bold text-sm">LOG</span>
                    </button>
                    <button onClick={() => setMenu(!openMenu)}>
                        {
                            !openMenu 
                            ? <TfiMenuAlt className="text-[#f4fcf0] text-xl"/>
                            : <AiOutlineClose className="text-[#f4fcf0] text-2xl"/>
                        }
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                {openMenu && <Menu />}
            </div>
        </div>
    );
}

export default Header;