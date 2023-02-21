import {
  Drawer, Toolbar, Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Typography
} from '@mui/material';
import { routesMap } from './SidebarModel'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../images/chat.png';

const drawerWidth = 240

export const Sidebar = () => {
  // use navigation
  const navigate = useNavigate();

  // current option
  const location = useLocation();
  const [currentOption, setCurrentOption] = useState(location.pathname.split('/')[1] ?? '');

  // click to change current option
  const handleClick = (option) => {
    setCurrentOption(option);
    navigate(option)
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
        {['', 'messages', 'explore', 'create', 'profile'].map(opt => (
          <ListItem key={opt} onClick={() => { handleClick(opt) }}>
            <ListItemButton>
              <ListItemIcon>
                {currentOption === opt ? routesMap[opt].icon : routesMap[opt].iconOutlined}
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{
                fontSize: 18,
                fontWeight: currentOption === opt ? 'bold' : 'normal'
              }} primary={ routesMap[opt].name } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>

  );
}
