import React, { useEffect, useRef } from "react";
import '../App.css'; // Assuming the global styles are in App.css
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// Floating animation keyframes
const floatUpDown = `
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Item = styled(Paper)(({ theme, delay }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #0a1f44 0%, #1f2a44 100%)'
    : 'linear-gradient(135deg, #0a1f44 0%, #1f2a44 100%)',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'left',
  color: '#ffffff',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
  border: '1px solid #ffffff',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '350px',
  animation: 'float 5s ease-in-out infinite',
  animationDelay: delay,  // Adding delay for alternating animation
  '&:hover': {
    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-8px)',
  },
}));

const CustomButton = styled('button')({
  backgroundColor: '#1f2a44',
  color: '#ffffff',
  padding: '12px 30px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  borderRadius: '50px',
  border: 'none',
  transition: '0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#1f2a44',
    boxShadow: '0 4px 10px rgba(255, 255, 255, 0.3)',
  },
});

const StockMarketPage = () => {
  const totalParticles = 300; // total particles
  const orbSize = 100; // size of the orb
  const particleSize = 1.5; // size of the particle
  const animationTime = '14s'; // total animation time
  const baseHue = 0; // base hue for color change

  const containerRef = useRef();

  useEffect(() => {
    const particles = containerRef.current.querySelectorAll('.c');
    particles.forEach((particle, index) => {
      const z = `${Math.random() * 360}deg`; // random angle for Z-axis
      const y = `${Math.random() * 360}deg`; // random angle for Y-axis
      const hue = (40 / totalParticles * index) + baseHue; // calculate hue for each particle

      // Set dynamic styles for each particle
      particle.style.animation = `orbit${index} ${animationTime} infinite`;
      particle.style.animationDelay = `${index * 0.01}s`;
      particle.style.backgroundColor = `white`;

      // Create keyframes dynamically for each particle
      const styleSheet = document.styleSheets[0];
      const keyframes = `
        @keyframes orbit${index} {
          20% {
            opacity: 1;
          }
          30% {
            transform: rotateZ(-${z}) rotateY(${y}) translateX(${orbSize}px) rotateZ(${z});
          }
          80% {
            transform: rotateZ(-${z}) rotateY(${y}) translateX(${orbSize}px) rotateZ(${z});
            opacity: 1;
          }
          100% {
            transform: rotateZ(-${z}) rotateY(${y}) translateX(${orbSize * 3}px) rotateZ(${z});
          }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });
  }, [totalParticles, orbSize, baseHue, animationTime]);

  return (
    <div className="stock-market-container">
      {/* Particle Animation */}
      <div
        ref={containerRef}
        className="wrap"
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          animation: `rotate ${animationTime} infinite linear`,
        }}
      >
        {[...Array(totalParticles)].map((_, index) => (
          <div
            key={index}
            className="c"
            style={{
              position: "absolute",
              width: `${particleSize}px`,
              height: `${particleSize}px`,
              borderRadius: "50%",
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Stock Market Content */}
      <Box sx={{ height: 700, flexGrow: 1, padding: 6, background: 'linear-gradient(135deg, #0a1f44 0%, #1f2a44 100%)' }}>
        {/* Inject keyframes animation */}
        <style>{floatUpDown}</style>

        <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, color: '#ffffff', fontWeight: 500, fontSize: '1.4rem' }}>
          Unlock the Power of Indian Stock Market Trading with Expert Insights
        </Typography>

        <Typography variant="body1" sx={{ textAlign: 'center', mt: 2, color: '#E0E0E0', maxWidth: '80%', margin: '0 auto', fontSize: '1.2rem' }}>
          Dive deep into the nuances of the Indian stock market with our bespoke trading strategies. Tailored to local market dynamics, our models are designed to empower traders to make data-driven decisions with precision and confidence.
        </Typography>

       
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 40, color: '#ffffff', fontWeight: 500, fontSize: '1.4rem' }}>
          Learn from the Experts: Master Indian Stock Trading
        </Typography>

      


        
      </Box>
    </div>
  );
};

export default StockMarketPage;
