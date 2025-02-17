const Cast = ({ cast }) => {
  
    const image = `https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`;

    return (
        <div className='w-auto max-w-[10rem] flex flex-col items-center'>
            <img alt={cast.name } src={image} className="size-[5rem] rounded-md mb-1"/>
            <span className="text-[#78a6b8] text-sm">{cast.name}</span>
            <span className="text-[#ddeeff] text-sm">{cast.character}</span>
        </div>
    )
}

export default Cast
