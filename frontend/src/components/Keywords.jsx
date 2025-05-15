import { FaTag } from "react-icons/fa6";

const Keywords = ({ data }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row py-2 gap-2">
                <FaTag className="text-dusty-sky text-2xl"/>
                <h1 className="text-white font-nunito-sans text-xl">{data.name}</h1>
            </div>
            <div className='w-full h-[1px] bg-midnight-blue'/>
        </div>
    );
};

export default Keywords;