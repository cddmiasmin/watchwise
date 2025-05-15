import { getTMDBImage } from "../utils/getTMDBImage";

const Movie = ({data}) => {
    const hasDate = data.release_date;
    const date = new Date(data.release_date);
    const year = date.getFullYear();

    const name = data.original_title || data.original_name;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-center">
                <img src={getTMDBImage(data.poster_path)} alt={name} className="w-15 rounded-sm"/>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-3">
                        <h1 className="font-merriweather text-white font-bold text-xl">{name}</h1>
                        { hasDate && <span className="font-extralight text-[#8899AA]">{year}</span>}
                    </div>
                    <p className={`text-dusty-sky text-xs md:text-sm xl:text-sm text-justify md:mr-8 xl:mr-0 line-clamp-3`}>
                        {data.overview}
                    </p>
                </div>
            </div>
            <div className='w-full h-[1px] bg-midnight-blue'/>
        </div>
    );
};

export default Movie;
