import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const ParticleGraphEffect = () => {
  useEffect(() => {
    const container = document.querySelector('.particle-container');

    container.addEventListener('mouseenter', () => {
      container.classList.add('hovered');
    });

    container.addEventListener('mouseleave', () => {
      container.classList.remove('hovered');
    });

    // Create particles on hover
    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      container.appendChild(particle);

      // Remove particle after animation ends
      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    // Add particles on mousemove
    container.addEventListener('mousemove', (e) => {
      if (container.classList.contains('hovered')) {
        createParticle(e.clientX, e.clientY);
      }
    });
  }, []);

  return (
    <Box
      className="particle-container"
      sx={{
        marginTop: '-16px',
        height: '300px',
        width: '100%',
        color: 'white',
        background: 'rgb(2,0,36) linear-gradient(329deg, rgba(2,0,36,1) 0%, rgba(26,26,93,1) 74%, rgba(0,212,255,1) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: 'center',
          letterSpacing: '0.02em',
          mb: 4,
          fontSize: '9.8vh',
          marginTop: 10,
          paddingTop: 8,
        }}
      >
        Why Choose TradeMaster?
      </Typography>
      <Typography sx={{ textAlign: 'center' }} variant="body1" color="white" paragraph>
        Our mission is to simplify trading for everyone, whether you're a beginner taking your first steps or an advanced
        trader looking for cutting-edge strategies.
      </Typography>
    </Box>
  );
};

export default ParticleGraphEffect;
