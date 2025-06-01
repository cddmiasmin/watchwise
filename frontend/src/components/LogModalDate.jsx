import { IoMdClose } from "react-icons/io";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from "react";

const LogModalDate = ({ openModalDate, setModalDate }) => {

    const [value, setValue] = useState(new Date());

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
                    <h1 className='text-white font-nunito-sans font-bold'>Availability or release date</h1>
                    <IoMdClose className='text-white hover:text-dusty-sky' onClick={() => setModalDate(true)} />
                </div>
            </DialogTitle>
            <DialogContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar 
                            showDaysOutsideCurrentMonth 
                            value={value} 
                            onChange={(newValue) => setValue(newValue)}
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