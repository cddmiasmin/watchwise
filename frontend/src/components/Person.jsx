import { getTMDBImage } from "../utils/getTMDBImage";

const Person = ({ data }) => {
    return(
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3">
                <img src={getTMDBImage(data.profile_path)} alt={data.name} className="w-15 rounded-sm"/>
                <div className="flex flex-col">
                    <h1 className="font-merriweather text-white font-bold text-xl m-0">{data.name}</h1>
                    <span className="font-extralight text-[#8899AA]">{data.known_for_department}</span>
                    <div className="flex flex-wrap items-center gap-1 mt-1">
                        <span className="text-dusty-sky text-xs">Know for</span>
                        {
                            data.known_for.map((item) => (
                                <span
                                    style={{boxShadow: 'inset 0 1px rgba(255, 255, 255, .05)'}} 
                                    className="bg-[#283038] text-dusty-sky text-xs rounded-sm py-[3px] px-[6px]"
                                >
                                    {item.title || item.name}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-midnight-blue'/>
        </div>   
    );
};

export default Person;