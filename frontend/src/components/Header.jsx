import { SiThemoviedatabase } from "react-icons/si";

import HearderStart from "./HeaderStart";
import HeaderEnd from "./HeaderEnd";

const Header = () => {
    return (
        <div className='w-screen h-18 py-3 flex flex-row justify-between items-center'>
            <HearderStart />
            <SiThemoviedatabase className="text-main text-4xl"/>
            <HeaderEnd />
        </div>
    );
}

export default Header
