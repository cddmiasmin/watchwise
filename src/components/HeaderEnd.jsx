import { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

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
            <IoSearch className="text-white" />
            <>
                <Button
                    id="basic-button"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <div className="flex flex-row items-center gap-1.5">
                        <Avatar alt="Florence Welch" src={avatar} sx={{ width: 35, height: 35 }}/>
                        <IoIosArrowDown className="text-white"/>
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
            </>
        </div>
    )
}

export default HeaderEnd
