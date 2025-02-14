import { useState } from 'react'

import { FiMenu } from "react-icons/fi";
import { HiMiniHome } from "react-icons/hi2";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


const HearderStart = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const options = [
    {
      name: 'Home',
      icon: <HiMiniHome className="text-black"/>
    }
  ];

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <FiMenu className="text-white text-lg"/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {options.map((option, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        </Box>
      </Drawer>
    </>
  );
}

export default HearderStart
