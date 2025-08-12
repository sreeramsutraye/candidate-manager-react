import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import ArchiveIcon from '@mui/icons-material/Archive';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    borderRight: '1px solid rgba(0, 0, 0, 0.08)',
  },
}));

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Open Candidates', icon: <InboxIcon />, path: '/open' },
    { text: 'In Progress', icon: <PendingIcon />, path: '/in-progress' },
    { text: 'Potential Candidates', icon: <StarIcon />, path: '/potential' },
    { text: 'Closed Candidates', icon: <CheckCircleIcon />, path: '/closed' },
    { text: 'Archived Candidates', icon: <ArchiveIcon />, path: '/archived' },
  ];

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Box sx={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path || (item.path === '/' && location.pathname === '/open')}
                sx={{
                  borderRadius: '0 24px 24px 0',
                  margin: '4px 8px 4px 0',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(63, 81, 181, 0.08)',
                    color: '#3f51b5',
                    '&:hover': {
                      backgroundColor: 'rgba(63, 81, 181, 0.12)',
                    },
                    '& .MuiListItemIcon-root': {
                      color: '#3f51b5',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: 'Settings', icon: <SettingsIcon /> },
            { text: 'Help & Support', icon: <HelpIcon /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: '0 24px 24px 0',
                  margin: '4px 8px 4px 0',
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
}