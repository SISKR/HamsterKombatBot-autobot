import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';

export default function HorizontalList() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <HideOnScroll>
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
        <List role="menubar" orientation="horizontal"style={{ background: isScrolled ? '#000' : 'transparent', height: '70px' }}>
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="#horizontal-list"
              aria-label="Home"
              style={{ color: 'white' }}
            >
              <Home />
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="#horizontal-list" style={{ color: 'white' }}>
              Products
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton className="hi" role="menuitem" component="a" href="#horizontal-list" style={{ color: 'white' }}>
              Blog
            </ListItemButton>
          </ListItem>
          <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
            <ListItemButton
              role="menuitem"
              component="a"
              href="#horizontal-list"
              aria-label="Profile"
              style={{ color: 'white' }}
            >
              <Person />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    // </HideOnScroll>
  );
}
