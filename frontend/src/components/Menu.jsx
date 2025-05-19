import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FaFilm } from "react-icons/fa";

import { user } from '../data/user';

const Menu = ({ openMenu, setMenu }) => {

    return (
        <Drawer 
            open={openMenu} 
            onClose={() => setMenu(false)}
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: '#14181c',
                }
            }}
        >
            <Box sx={{ width: 250 }} onClick={() => setMenu(false)}>
                <div className='mt-5 flex flex-col gap-2 justify-center items-center'>
                    <img
                        className="size-[4rem] border border-white rounded-full"  
                        src={user.icon}
                        alt={`${user.name}'s icon`}
                    />
                    <span className="font-nunito-sans font-extrabold text-white text-sm">
                        {user.username}
                    </span>
                </div>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FaFilm className='text-dusty-sky'/>
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ color: 'white'}} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Menu;