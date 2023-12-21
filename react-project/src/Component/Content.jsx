import React from 'react';
import ReactPlayer from 'react-player';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Video1 from './Video1.mp4';

const VideoPlayer = () => {
  return (
    <Container>
      <AppBar position="static">
        {/* Add any app bar content if needed */}
      </AppBar>
      <div style={{
        marginLeft: '200px',
        marginRight: '0',
        width: '70%', 
        height: '65vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
        borderRadius: '8px', 
        marginTop: '20px'
      }}>
        <ReactPlayer
          url={Video1} 
          controls
          width="100%"
          height="100%"
        />
      </div>
    </Container>
  );
};

export default VideoPlayer;
