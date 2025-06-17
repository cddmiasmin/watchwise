import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const LogModalDate = ({ openModalDate, setModalDate }) => {

    const [type, setType] = useState(null);
    const [datePicker, setDatePicker] = useState(dayjs());

    return (
            <Dialog
                open={openModalDate}
                onClose={() => setModalDate(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: '#456',
                            borderRadius: '6px'
                        },
                    },
                }}
            >
            <DialogTitle 
                sx={{ m: 0, p: 2, borderBottom: '0.5px solid #345' }} 
                id="customized-dialog-title"
            >
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-white font-nunito-sans font-bold'>Availability or departure date</h1>
                    <IoMdClose className='text-white hover:text-dusty-sky' onClick={() => setModalDate(true)} />
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="flex flex-col justify-center items-center size-full mt-2">             
                    <FormControl sx={{ m: 1 }} className="w-full">
                        <InputLabel 
                            id="demo-simple-select-helper-label"
                            sx={{
                                color: 'white',
                                '&.Mui-focused': {
                                    color: 'white',
                                    backgroundColor: '#456',
                                    padding: '1px 5px'
                                },
                            }}
                        >
                            Type
                        </InputLabel>
                        <Select
                            id="demo-simple-select-helper"
                            labelId="demo-simple-select-helper-label"
                            label="Type"
                            value={type}
                            onChange={(event) => setType(event.target.value)}
                            sx={{
                                color: 'white',
                                backgroundColor: 'transparent' ,
                                border: '1px solid #89a',
                                borderRadius: '4px',
                                '& .MuiSelect-select': {
                                    fontStyle: 'light',
                                },
                                '& .MuiSelect-icon': {
                                    color: '#89a',
                                },
                                '& fieldset': { border: 'none' },         
                        }}
                        MenuProps={{
                            PaperProps: {
                            sx: {
                                bgcolor: '#89a',
                                '& .MuiMenuItem-root': {
                                    fontFamily: 'Nunito Sans, sans-serif',
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
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Availability date</MenuItem>
                            <MenuItem value={20}>Departure date</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar 
                                    showDaysOutsideCurrentMonth 
                                    value={datePicker} 
                                    onChange={(newDate) => setDatePicker(newDate)}
                                    views={['year', 'month', 'day']}
                                    sx={{
                                        '& .MuiPickersCalendarHeader-label': {
                                            color: 'white'
                                        },
                                        '& .MuiIconButton-root': {
                                            color: 'white'
                                        },
                                        '& .MuiDayCalendar-weekDayLabel': {
                                            color: '#99AABB',
                                        },
                                        '& .MuiPickersDay-dayWithMargin': {
                                            color: 'white'
                                        },
                                        '& .MuiPickersDay-dayOutsideMonth': {
                                            color: '#99AABB'
                                        },
                                        '& .MuiPickersDay-dayWithMargin.Mui-selected': {
                                            color: '#f4fcf0',
                                            backgroundColor: '#00ac1c',
                                            borderRadius: '6px'
                                        },
                                        '& .MuiPickersDay-dayWithMargin.Mui-selected:hover': {
                                            color: '#f4fcf0',
                                            border: '1px solid #00ac1c',
                                            borderRadius: '6px'
                                        },
                                        '& .MuiPickersDay-root:not(.Mui-selected)': {
                                            border: 'none'
                                        },
                                        '& .MuiYearCalendar-button': {
                                            color: '#99AABB'
                                        },
                                        '& .MuiMonthCalendar-button': {
                                            color: '#99AABB'
                                        },
                                        '& .MuiYearCalendar-button.Mui-selected': {
                                            color: '#f4fcf0',
                                            backgroundColor: '#00ac1c',
                                            borderRadius: '6px'
                                        },
                                        '& .MuiMonthCalendar-button.Mui-selected': {
                                            color: '#f4fcf0',
                                            backgroundColor: '#00ac1c',
                                            borderRadius: '6px'
                                        }
                                    }}
                                />
                        </LocalizationProvider>
                    </div>
                </div>
            </DialogContent>
            <DialogActions sx={{backgroundColor: '#345'}}>
                <button
                    className="bg-[#567] uppercase py-1 px-3 rounded-sm text-[#c8d4e0] font-nunito-sans font-bold text-base cursor-pointer"
                    style={{boxShadow: 'inset 0 1px rgba(255,255,255,.2)'}}
                    onClick={() => setModalDate(false)}
                >
                    Cancel
                </button>
                <button
                    className="bg-[#00ac1c] hover:bg-[#009318] uppercase py-1 px-3 rounded-sm text-[#f4fcf0] font-bold text-base cursor-pointer"
                    style={{boxShadow: 'inset 0 1px rgba(255,255,255,.2),inset 0 -1px rgba(255,255,255,.2)'}}
                    onClick={() => setModalDate(false)}
                >
                    Save
                </button>
            </DialogActions>
        </Dialog>
    );
}

export default LogModalDate;