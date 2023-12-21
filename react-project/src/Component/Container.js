import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './css/page.css'
import Content from './Content'; // Assuming Content is your video component

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
    <center>
    <h1 style={{fontWeight: 'bold', fontSize: '36px'}}>OUR SERVICE</h1>
    </center> 
    <br></br>
      <Container fixed>
        <Box sx={{  marginLeft:'-200px',width: '1535px', bgcolor: '',top:'-20px', height: '70vh', position: 'relative',boxradius:'2px' }}>
          <Content />
        </Box>
      </Container>
    </React.Fragment>
  );
}
