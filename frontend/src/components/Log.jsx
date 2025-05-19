import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Log = ({ openLog, setLog }) => {
    return (
        <Dialog  
            open={openLog} 
            onClose={() => setLog(false)}
            sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: '#AABBCC',
                }
            }}
        >
            <DialogTitle>Set backup account</DialogTitle>
            <Box sx={{ width: 250 }} onClick={() => setLog(false)}>
                <span className='text-white'>iasmin</span>
            </Box>
        </Dialog >
    );
};

export default Log;