import { useState } from "react";

import { BsFillGridFill, BsGrid, BsList } from "react-icons/bs";
import { TbLayoutList, TbLayoutListFilled } from "react-icons/tb";

import Header from "../components/Header";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import CircularProgress from '@mui/material/CircularProgress';
import { getTMDBImage } from "../utils/getTMDBImage";

import { FaCalendar } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { HiMiniLink } from "react-icons/hi2";
import Tooltip from '@mui/material/Tooltip';
import LogModalSend from "../components/LogModalSend";
import LogModalDate from "../components/LogModalDate";

const Log = () => {

    const [data, setData] = useState ([
        {
            "adult": false,
            "backdrop_path": "/g9ROrZey0JYp7kf8DoAyZtKnObj.jpg",
            "genre_ids": [
                27
            ],
            "id": 377,
            "original_language": "en",
            "original_title": "A Nightmare on Elm Street",
            "overview": "Um grupo de adolescentes tem pesadelos horríveis, onde são atacados por um homem deformado com garras de aço. Ele apenas aparece durante o sono e, para escapar, é preciso acordar. Os crimes vão ocorrendo seguidamente, até que se descobre que o ser misterioso é na verdade Freddy Krueger, um homem que molestou crianças na rua Elm e que foi queimado vivo pela vizinhança. Agora Krueger pode retornar para se vingar daqueles que o mataram, através do sono.",
            "popularity": 10.6504,
            "poster_path": "/bFwAfcDbpUNceH5zWt5kTFp3WyP.jpg",
            "release_date": "1984-11-09",
            "title": "A Hora do Pesadelo",
            "video": false,
            "vote_average": 7.335,
            "vote_count": 5316
        },
        {
            "adult": false,
            "backdrop_path": "/4PPC7fKClu0u7NTbo5xgV4vb5VD.jpg",
            "genre_ids": [
                80,
                27,
                9648
            ],
            "id": 4232,
            "original_language": "en",
            "original_title": "Scream",
            "overview": "Após uma série de mortes misteriosas, um grupo de amigos são ameaçados por um assassino. Em uma mistura de emoções fortes e muitos sustos, aqui a única coisa que se pode ter certeza é que todos são vítimas e todos são suspeitos.",
            "popularity": 15.6612,
            "poster_path": "/cJj2gYzkPFSqYGGOhfLgeANlXkB.jpg",
            "release_date": "1996-12-20",
            "title": "Pânico",
            "video": false,
            "vote_average": 7.414,
            "vote_count": 7296
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [typeView, setTypeView] = useState('list');
    const [sort, setSort] = useState('fn-az');
    const [openSelect, setOpenSelect] = useState(false); 

    const [openModalSend, setModalSend] = useState(false);
    const [openModalLink, setModalLink] = useState(false);
    const [openModalDate, setModalDate] = useState(true);

    const options = [
        { value: 'fn-az', name: 'Film Name (A-Z)' },
        { value: 'dd-nf', name: 'Diary Date (Newest First)' },
        { value: 'dd-of', name: 'Diary Date (Oldest First)' },
        { value: 'rd-nf', name: 'Release Date (Newest First)' },
        { value: 'rd-of', name: 'Release Date (Oldest First))' },
        { value: 'ar-htl', name: 'Average Rating (High to Low)' },
        { value: 'ar-lth', name: 'Average Rating (Low to High)' },
        { value: 'fl-sf', name: 'Film Length (Shortest First)' },
        { value: 'fl-lf', name: 'Film Length (Longest First)' }
    ];

    const typeList = (movie, key) => {
        return (
            <div 
                key={key} 
                className={`flex flex-row w-full h-20 px-4 justify-between items-center ${(key+1) === data.length ? '' : 'border-b border-b-[#345]'}`}
            >
                <div className="flex flex-row justify-center items-center gap-4">
                    <img 
                        className="w-9 h-14 rounded-sm" 
                        src={getTMDBImage(movie.poster_path)} 
                        alt={movie.title} 
                        style={{boxShadow: 'inset 0 0 0 1px rgba(221,238,255,.1)'}}
                    />
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <h1  className="font-merriweather font-bold text-white text-lg">
                                {movie.title}
                            </h1>
                            <span className='font-roboto font-thin text-dusty-sky text-sm'>{getYear(movie.release_date)}</span>                    
                        </div>
                        <div className="flex flex-row w-full justify-start gap-2">
                            <Tooltip title="Send recommendation" placement="top">
                                <IoIosSend
                                    onClick={() => setModalSend(true)} 
                                    className="md:hidden text-dusty-sky cursor-pointer hover:text-white" 
                                />
                            </Tooltip>
                            <Tooltip title="Add link" placement="top">
                                <HiMiniLink className="md:hidden text-dusty-sky cursor-pointer hover:text-white" />
                            </Tooltip>
                            <Tooltip title="Availability or release date" placement="top">
                                <FaCalendar
                                    onClick={() => setModalDate(true)} 
                                    className="md:hidden text-sm text-dusty-sky cursor-pointer hover:text-white" 
                                />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <div className="flex flex-row gap-2">
                        <Tooltip title="Send recommendation" placement="top">
                            <IoIosSend className="max-sm:hidden text-dusty-sky cursor-pointer hover:text-white" />
                        </Tooltip>
                        <Tooltip title="Add link" placement="top">
                            <HiMiniLink className="max-sm:hidden text-dusty-sky cursor-pointer hover:text-white" />
                        </Tooltip>
                        <Tooltip title="Availability or release date" placement="top">
                            <FaCalendar
                                onClick={() => setModalDate(true)} 
                                className="max-sm:hidden text-sm text-dusty-sky cursor-pointer hover:text-white" 
                            />
                        </Tooltip>
                    </div>
                    <div className='w-[1px] h-20 bg-[#345]'/>
                    <Tooltip title="Delete" placement="top">
                        <MdDelete className="text-dusty-sky cursor-pointer hover:text-white" />
                    </Tooltip>
                </div>
            </div>
        );
    }

    const typeGrid = (movie, key) => {
        return (
            <div 
                key={key} 
                className='group justify-center items-center relative'
            >
                <div 
                    className="flex absolute justify-center items-center mt-31 w-26 h-8 rounded-b-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2"
                    style={{background: 'rgba(0, 0, 0, 0.7)'}}
                >
                    <Tooltip title="Send recommendation" placement="top">
                        <IoIosSend className="max-sm:hidden text-dusty-sky cursor-pointer hover:text-white" />
                    </Tooltip>
                    <Tooltip title="Add link" placement="top">
                        <HiMiniLink className="max-sm:hidden text-dusty-sky cursor-pointer hover:text-white" />
                    </Tooltip>
                    <Tooltip title="Availability or release date" placement="top">
                        <FaCalendar 
                            onClick={() => setModalDate(true)}
                            className="max-sm:hidden text-sm text-dusty-sky cursor-pointer hover:text-white" 
                        />
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                        <MdDelete className="text-dusty-sky cursor-pointer hover:text-white" />
                    </Tooltip>
                </div>
                <div className="w-26">
                    <img 
                        className="size-full rounded-sm" 
                        src={getTMDBImage(movie.poster_path)} 
                        alt={movie.title} 
                        style={{ boxShadow: 'inset 0 0 0 1px rgba(221,238,255,.1)' }}
                    />
                </div>
            </div>
        );
    }

    const getYear = (date) =>  { return new Date(date).getFullYear() };

    return(
        <div 
            className={`w-screen min-h-screen flex flex-col justify-star items-center`}
            style={{background: `#14181c url('/content-bg.png') repeat-x`}}
        >
            <div className="bg-midnight-slate w-full h-fit flex justify-center">
                <Header bgColor={true}/>
            </div>
            <div className="w-full md:w-[62.5%] xl:w-[70%] py-8 max-md:px-4 flex flex-col">
                <h1 className="font-nunito-sans text-dusty-sky font-light text-3xl">
                    New Log
                </h1>
                <div className='w-full h-[1px] bg-dusty-sky'/>
                <div className="flex flex-col items-center xl:flex-row mt-5 gap-1 ">
                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <button
                            className="bg-[#00ac1c] hover:bg-[#009318] uppercase max-md:w-full px-5 whitespace-nowrap rounded-sm text-[#f4fcf0] font-bold text-base max-md:py-2 cursor-pointer"
                            style={{boxShadow: 'inset 0 1px rgba(255,255,255,.2),inset 0 -1px rgba(255,255,255,.2)'}}
                            onClick={() => setLoading(false)}
                        >
                            Add a film
                        </button>
                        <input 
                            className="bg-[#2c3440] focus:bg-white outline-transparent focus:ring-0 h-9 w-full rounded-xs font-nunito-sans font-normal text-[#8899aa] focus:text-[#234] focus:shadow-none p-2"
                            placeholder="Enter name of film..."
                            style={{boxShadow: 'inset 0 -1px #456'}}
                        />
                    </div>
                        {/* <span className="font-nunito-sans text-dusty-sky font-semibold text-xl px-2">or</span>
                    <div className="flex flex-col md:flex-row w-full gap-2 max-md:items-center">
                        <input 
                            className="bg-[#2c3440] focus:bg-white outline-none focus:ring-0 h-9 w-full rounded-xs font-nunito-sans font-normal text-[#8899aa] focus:text-[#234] focus:shadow-none p-2"
                            placeholder="Paste your link here"
                            style={{boxShadow: 'inset 0 -1px #456'}}
                        />
                        <button
                            className="bg-[#567] uppercase px-5 rounded-sm text-[#c8d4e0] font-bold text-base max-md:py-2 max-md:w-5/12 cursor-pointer"
                            style={{boxShadow: 'inset 0 1px rgba(255,255,255,.2),inset 0 -1px rgba(255,255,255,.2)'}}
                            onClick={() => setLoading(true)}
                        >
                            Search
                        </button>
                    </div> */}
                </div>
                <div className="my-5 flex flex-col">
                    <div className='w-full h-[1px] bg-dusty-sky'/>
                    <div className="flex flex-row justify-end items-center">
                        <FormControl sx={{ m: 1, maxWidth: 528, marginRight: '-7px' }}>
                            <Select
                                value={sort}
                                onChange={(event) => setSort(event.target.value)}
                                onOpen={() => setOpenSelect(true)}
                                onClose={() => setOpenSelect(false)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Sort by' }}
                                sx={{
                                    color: openSelect ? 'white' : '#678',
                                    backgroundColor: openSelect ? '#89a' : 'transparent',
                                    padding: '4px 4px 4px 10px',
                                    '&:hover': {
                                        color: '#89a',
                                    },
                                    '&:hover .MuiSelect-icon': {
                                        color: '#89a',
                                    },
                                    '& .MuiSelect-select': {
                                        padding: 0,
                                        fontStyle: 'light',
                                    },
                                    '& .MuiSelect-icon': {
                                        color: openSelect ? 'white' : '#678',
                                    },
                                    '& fieldset': { border: 'none' },
                                }}
                                MenuProps={{
                                    PaperProps: {
                                    sx: {
                                        bgcolor: '#89a',
                                        '& .MuiMenuItem-root': {
                                            fontSize: '14px',
                                            color: 'white',
                                            '&.Mui-selected': {
                                                backgroundColor: '#99aabb',
                                            },
                                        },
                                    },
                                    },
                                }}
                            >
                            {options.map((op) => (
                                <MenuItem key={op.value} value={op.value}>
                                {op.name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        <div className="flex flex-row">
                            <button
                                onClick={() => setTypeView('list')} 
                                className='p-0.5 rounded-xs cursor-pointer'
                            >
                                {typeView === 'list' ? <TbLayoutListFilled className="text-dusty-sky text-lg"/> : <TbLayoutList className="text-dusty-sky text-lg"/>}
                            </button>
                            <button
                                onClick={() => setTypeView('grid')} 
                                className='p-0.5 rounded-xs cursor-pointer'
                            >
                                {typeView === 'grid' ? <BsFillGridFill className="text-dusty-sky"/> : <BsGrid className="text-dusty-sky"/>}
                            </button>
                        </div>    
                    </div>
                    <div className='w-full h-[1px] bg-dusty-sky'/>
                </div>
                <div className='flex justify-center items-center'>
                    { 
                        loading 
                            ?
                                <CircularProgress size="1.5rem"/> 

                            :
                                data.length === 0
                                ?
                                    <div className="w-full flex flex-col justify-center items-center border border-[#345] pt-10 pb-12 px-2.5 rounded-sm">
                                        <span className="font-nunito-sans text-white font-bold text-xl">Your list is empty.</span>
                                        <span className="font-nunito-sans text-dusty-sky font-normal text-light text-center">Add films using the field above.</span>
                                    </div>
                                :
                                    <div className={`w-full flex ${typeView === 'list' ? ' flex-col justify-center items-center' : 'flex-wrap flex-row justify-star items-center gap-2 p-2'}  border border-[#345] rounded-sm`}>
                                            {
                                                data.map((movie, key) => (
                                                    typeView === 'list' ? typeList(movie, key) : typeGrid(movie, key)
                                                ))
                                            }
                                    </div>
                    }
                </div>
            </div>
            <LogModalSend openModalSend={openModalSend} setModalSend={setModalSend}/>        
            <LogModalDate openModalDate={openModalDate} setModalDate={setModalDate}/>
        </div>
    );
}

export default Log;

