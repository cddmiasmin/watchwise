const Similar = ({ similar }) => {

    const image = `https://image.tmdb.org/t/p/original/${similar.poster_path}`;
    const release = new Date(similar.release_date);
    const year = release.getFullYear();

    return (
        <div className="w-[10rem] flex flex-col justify-center items-center">
            <img alt={similar.title} src={image} className="w-full h-[15rem]"/>
            <span className="text-[#6a7c8f] text-sm mt-2 font-bold">{similar.title}</span>
            <span className="text-[#6a7c8f] text-xs">{year}</span>
        </div>
    )
}

export default Similar
