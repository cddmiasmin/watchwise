import { useState } from "react";

import Keywords from "../components/Keywords";
import Header from "../components/Header";
import Person from "../components/Person";
import Movie from "../components/Movie";

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { collections, keywords, movies, people } from "../data/search";

const Search = () => {
    const [option, setOption] = useState(0);

    const resultsOptions = [
        {index: 0, option: 'All'},
        {index: 1, option: 'Films'},
        {index: 2, option: 'People'},
        {index: 3, option: 'Keywords'},
        {index: 4, option: 'Collections'},
    ];

    const handleChange = (event) => setOption(event.target.value);

    return (
        <div 
            className={`w-screen min-h-screen flex flex-col justify-star items-center`}
            style={{background: `#14181c url('/content-bg.png') repeat-x`}}
        >
            <div className="bg-midnight-slate w-full h-fit flex justify-center">
                <Header bgColor={true}/>
            </div>
            <div className="w-full mt-5 md:w-[62.5%] xl:w-[70%] flex flex-col xl:grid md:grid-cols-6 xl:gap-5 max-md:px-3">
                <div className="xl:hidden mb-5">
                    <div className="flex flex-col max-md:gap-2 md:grid md:grid-cols-3 justify-between md:items-center">
                        <h1 className="text-dusty-sky font-nunito-sans md:col-span-1">SHOW RESULTS FOR</h1>
                        <FormControl className="md:col-span-2">
                            <Select
                                labelId="select-label"
                                id="select"
                                value={option}
                                onChange={handleChange}
                                defaultValue={0}
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#99AABB',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white',
                                    },
                                    // Cor da borda quando o select está focado
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'white',
                                    },
                                      '& .MuiSelect-icon': {
                                        color: '#99AABB',
                                    },
                                    '&:hover .MuiSelect-icon': {
                                        color: 'white',
                                    },
                                    '&.Mui-focused .MuiSelect-icon': {
                                        color: 'white',
                                    },
                                    backgroundColor: 'transparent', 
                                    width: 'auto', 
                                    height: 40, 
                                    color: '#99AABB', 
                                    borderColor: '#99AABB'
                                }}
                                className="md:ml-[25px]"
                            >
                                {
                                    resultsOptions.map((op) => (
                                        <MenuItem value={op.index}>{op.option}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="xl:col-span-4">
                    <h1 className="text-dusty-sky font-nunito-sans">SHOW MATCHES FOR "SCREAM"</h1>
                    <div className='w-full h-[1px] bg-dusty-sky'/>
                    <div className="mt-2 flex flex-col gap-2">
                        {
                            (option === 1 || option === 0) &&
                                movies.map((movie) => (
                                    <Movie data={movie}/>
                                ))
                        }
                        {
                            (option === 2 || option === 0) &&
                                people.map((person) => (
                                    <Person data={person}/>
                                ))
                        }
                        {
                            (option === 3 || option === 0) &&
                                keywords.map((word) => (
                                    <Keywords data={word}/>
                                ))
                        }
                        {
                            (option === 4 || option === 0) &&
                                collections.map((movie) => (
                                    <Movie data={movie}/>
                                ))
                        }
                    </div>
                </div>
                <div className="max-xl:hidden xl:col-span-2">
                    <h1 className="text-dusty-sky font-nunito-sans">SHOW RESULTS FOR</h1>
                    <div className='w-full h-[1px] bg-dusty-sky'/>
                    <div className="mt-2 flex flex-col items-start gap-2">
                        {
                            resultsOptions.map((op, key) => (
                                <button
                                    onClick={() => setOption(op.index)} 
                                    className={`font-nunito-sans ${op.index === option ? 'bg-midnight-blue text-white' : 'bg-transparent text-dusty-sky hover:text-blue-500'} hover:cursor-pointer w-full flex items-start pl-2 `}
                                >
                                    {op.option}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;