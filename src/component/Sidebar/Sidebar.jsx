import {
  Drawer, Toolbar, Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Typography
} from '@mui/material';
import { optionMap } from './SidebarModel'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../images/chat.png';

const drawerWidth = 240

export const Sidebar = () => {
  // use navigation
  const navigate = useNavigate();

  // current option
  const [currentOption, setCurrentOption] = useState('Home');

  // click to change current option
  const handleClick = (option) => {
    setCurrentOption(option);
    navigate(optionMap[option].route)
  };

  const mouseEnterIcon = event => {
    event.target.style.transform = 'rotate(-36deg)';
  }

  const mouseOutIcon = event => {
    event.target.style.transform = null;
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ padding: '20px' }}>
        <img src={logo} alt='chat app logo' style={{
          width: '50px', marginRight: '15px', transition: 'transform .5s ease-in-out',
        }}
          onMouseEnter={mouseEnterIcon}
          onMouseOut={mouseOutIcon}
        />
        <Typography
          style={{ cursor: 'pointer' }}
          variant="h6"
          noWrap
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 800,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
          onClick={() => { handleClick('Home') }}
        > ChatAPP </Typography>
      </Toolbar>
      <Divider />
      <List>
        {['Home', 'Messages', 'Explore', 'Create', 'Profile'].map(opt => (
          <ListItem key={opt} onClick={() => { handleClick(opt) }}>
            <ListItemButton>
              <ListItemIcon>
                {currentOption === opt ? optionMap[opt].icon : optionMap[opt].iconOutlined}
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{
                fontSize: 18,
                fontWeight: currentOption === opt ? 'bold' : 'normal'
              }} primary={opt} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>

  );
}
