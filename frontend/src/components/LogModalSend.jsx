import { IoMdClose } from "react-icons/io";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const LogModalSend = ({ openModalSend, setModalSend }) => {
    return(
        <Dialog
            open={openModalSend}
            onClose={() => setModalSend(false)}
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
                    <h1 className='text-white font-nunito-sans font-bold'>Send recommendation</h1>
                    <IoMdClose className='text-white hover:text-dusty-sky' onClick={() => setModalSend(true)} />
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="flex flex-col">
                    
                </div>
            </DialogContent>
            <DialogActions sx={{backgroundColor: '#345'}}>
                <button
                    className="bg-[#567] uppercase py-1 px-3 rounded-sm text-[#c8d4e0] font-nunito-sans font-bold text-base cursor-pointer"
                    style={{boxShadow: 'inset 0 1px rgba(255,255,255,.2)'}}
                    onClick={() => setModalSend(false)}
                >
                    Cancel
                </button>
                <button
                    className="bg-[#00ac1c] hover:bg-[#009318] uppercase py-1 px-3 rounded-sm text-[#f4fcf0] font-bold text-base cursor-pointer"
                    style={{boxShadow: 'inset 0 1px rgba(255,255,255,.2),inset 0 -1px rgba(255,255,255,.2)'}}
                    onClick={() => setModalSend(false)}
                >
                    Save
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default LogModalSend;