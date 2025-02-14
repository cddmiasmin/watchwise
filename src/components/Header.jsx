import { SiThemoviedatabase } from "react-icons/si";

import HearderStart from "./HeaderStart";
import HeaderEnd from "./HeaderEnd";

const Header = () => {
    return (
        <div className='w-screen z-40 mb-4 p-3 flex flex-row justify-between items-center'>
            <HearderStart />
            <SiThemoviedatabase className="text-white text-4xl"/>
            <HeaderEnd />
        </div>
    );
}

export default Header
