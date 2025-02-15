import { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { colorBackground } from '../utils/colors';

const HeaderEnd = () => {

    const avatar = 'https://i.pinimg.com/736x/25/fe/9f/25fe9f36701bdd3b29e4e1ed4dabe032.jpg';

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className="flex flex-row items-center gap-2">
            <Button
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className="flex flex-row items-center gap-1.5">
                    <Avatar 
                        sx={{ bgcolor: colorBackground, border: 1, fontSize: 11, width: '6vh', height: '5vh', fontWeight: 'bold', gap: 0.2 }} 
                        variant="rounded"
                    >
                        FW
                        {/* <IoIosArrowDown className="text-white"/> */}
                    </Avatar>
                </div>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>  
        </div>
    )
}

export default HeaderEnd
