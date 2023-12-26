import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import Popupcontent from './Popupcontent';

import Popover from '@mui/material/Popover';
import { Link, Routes, Route, useParams } from 'react-router-dom';

const WelcomeMessage = () => {
  // Extract the username from URL parameters
  const { username } = useParams();

  return (
    <div>
      <h5 component="a" style={{ color: 'white' }}>
        Welcome, {username}!
      </h5>
    </div>
  );
};

const HorizontalList = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { username } = useParams(); // Extract username from URL
  const [githubUser, setGitHubUser] = React.useState(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGitHubLoginCallback = (user) => {
    setGitHubUser(user);
    handleClose();
  };

  return (
    <Box
      component="nav"
      aria-label="My site"
      sx={{
        flexGrow: 1,
        transition: 'background 0.3s',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        style={{
          background: isScrolled ? '#000' : 'transparent',
          height: '70px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* ... (your existing list items) */}
        {/* Profile Item */}
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          {githubUser ? (
            <Link to={`/home/${githubUser.username}`} style={{ textDecoration: 'none', color: 'white' }}>
              <Person />
              <span style={{ marginLeft: '5px' }}>{githubUser.username}</span>
            </Link>
          ) : (
            <ListItemButton
              role="menuitem"
              component="a"
              href="#h"
              aria-label="Profile"
              onClick={handleClick}
              style={{ color: 'white' }}
            >
              <Person />
            </ListItemButton>
          )}
        </ListItem>
        <ListItem role="none">
          {githubUser ? (
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Logout
            </Link>
          ) : (
            <ListItemButton
              role="menuitem"
              component="a"
              href="/home"
              style={{ color: 'white' }}
            >
              Logout
            </ListItemButton>
          )}
        </ListItem>
        <ListItem role="none">
          <ListItemButton
            className="hi"
            role="menuitem"
            component="a"
            href="#horizontal-list"
            onClick={handleClick}
            style={{ color: 'white' }}
          ></ListItemButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Popupcontent onGitHubLogin={handleGitHubLoginCallback} />
          </Popover>
        </ListItem>
        <ListItem role="none">
          <Routes sx={{ marginInlineStart: 'auto' }}>
            <Route path="/home/:username" element={<WelcomeMessage />} />
            {/* Add more routes as needed */}
          </Routes>
        </ListItem>
      </List>
    </Box>
  );
};

export default HorizontalList;
