import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

// Styled Box for the hero section with a dark background
const HeroBox = styled(Box)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#1a1a1a', // Dark background for visibility
  backgroundImage:`url('https://your-new-image-url.jpg')`, // Update with the new image URL
  backgroundSize: 'cover', // Ensure the image covers the entire container
  backgroundPosition: 'center', // Center the background image
  padding: theme.spacing(12), // Use MUI spacing
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  [theme.breakpoints.down('md')]: { // Responsive adjustments
    padding: theme.spacing(6),
    textAlign: 'center',
  },
}));

// Styled stat component with different styles for glowing borders
const StatBox = styled(Box)(({ theme, variant }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  borderRadius: '8px',
  border: '1px solid white',
  boxShadow: variant === 'shiny' ? '0 0 15px rgba(255, 255, 255, 0.8)' : 
    variant === 'gold' ? '0 0 15px 5px rgba(255, 223, 0, 0.2)' : 
    '0 0 15px 5px rgba(255, 0, 255, 0.2)', // Glowing effect for each variant
  backgroundColor: variant === 'gold' ? 'transparent' : 'transparent',
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
  '&:hover': {
    boxShadow: variant === 'shiny' ? '0 0 25px rgba(255, 255, 255,0.41)' :
      variant === 'gold' ? '0 0 25px 5px rgba(255, 223, 0, 0.4)' : 
      '0 0 25px 5px rgba(255, 0, 255, 0.4)', // Enhanced glow on hover
  }
}));

export default function Hero() {
  const [currentText, setCurrentText] = React.useState(0);
  const texts = [
    "Art of Trading and Investing in Indian Stock, Commodity, and Currency Markets",
    "Expert strategies for success in the Indian Stock Market, Commodities, and Currency Trading",
    "hands-on experience with our comprehensive courses on Stock, Commodity, and Currency Trading",
    "Expert in Indian Stock Market, Commodities, and Currency Trading"
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    // Generate particles and animate them
    const particles = [];
    const numParticles = 100;
    const container = document.querySelector('.particle-container');

    // Generate particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      container.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    const animateParticles = () => {
      particles.forEach((particle) => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 2; // Particle size between 2px and 5px
        const animationDuration = Math.random() * 3 + 2; // Animation duration between 2s and 5s

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animationDuration = `${animationDuration}s`;

        // Add animation
        particle.style.animationName = 'particleAnimation';
      });
    };

    // Initial call to animate particles
    animateParticles();
    setInterval(animateParticles, 10000); // Re-run the animation every 10 seconds

    return () => {
      // Clean up particles when component unmounts
      particles.forEach((particle) => {
        particle.remove();
      });
    };
  }, [texts.length]);

  return (
    <>
      <style>{`
        .particle-container {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: particleAnimation linear infinite;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8); /* Shiny effect */
        }

        @keyframes particleAnimation {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y));
            opacity: 0;
          }
        }

        /* Floating animation for text */
        .floating-text {
          animation: float 4s ease-in-out infinite;
        }

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

        /* Fade in/out animations */
        .fade {
          animation: fadeAnimation 4s ease-out forwards;
        }

        @keyframes fadeAnimation {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .contact-info {
          position: absolute;
          bottom: 20px;
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 20px;
          z-index: 10;
        }

        .contact-info a {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .contact-info a + a {
          margin-left: auto;
        }
      `}</style>

      <HeroBox>
        <Box sx={{ maxWidth: 800, height: 500 }}> {/* Content container */}
          <Box sx={{ height: 400 }}>
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ lineHeight: 1.2 }} 
              className="floating-text fade"
              key={currentText} // Key to trigger re-render when text changes
            >
              {texts[currentText]}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }} className="floating-text">
              Discover cutting-edge stock market strategies and insights to become a
              confident and successful investor. Join thousands of learners today.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StatBox variant="shiny">
                <Typography variant="h5" fontWeight="bold">500+</Typography>
                <Typography variant="body2" color="grey.400">Courses Offered</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatBox variant="gold">
                <Typography variant="h5" fontWeight="bold">50K+</Typography>
                <Typography variant="body2" color="grey.400">Satisfied Learners</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatBox variant="purple">
                <Typography variant="h5" fontWeight="bold">4.9</Typography>
                <Typography variant="body2" color="grey.400">Average Rating</Typography>
              </StatBox>
            </Grid>
          </Grid>
        </Box>

        {/* Particles Effect Container */}
        <div className="particle-container">
          {/* Individual particles are dynamically added by JS */}
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <a href="tel:+1234567890">
            <PhoneIcon sx={{ mr: 1 }} />
            +123 456 7890
          </a>
          <a href="mailto:info@bigprofits.com">
            <MailIcon sx={{ mr: 1 }} />
            info@bigprofits.com
          </a>
        </div>
      </HeroBox>
    </>
  );
}
