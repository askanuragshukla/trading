import React, { useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const GradientBackground = styled(Box)({
  position: 'relative',
  background: 'linear-gradient(135deg, #0a1f44 0%, #1f2a44 100%)', // Keeping the original blue gradient
  padding: '40px 0',
  borderRadius: '12px',
  overflow: 'hidden',
});

const CustomButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#FFD700',
    boxShadow: '0 4px 10px rgba(255, 215, 0, 0.3)',
  },
  padding: '14px 30px',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '50px',
  backgroundColor: '#1f2a44',
  color: '#ffffff',
  transition: '0.3s ease-in-out',
});

const InputField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: '#ffffff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFD700',
    },
    '&:hover fieldset': {
      borderColor: '#FFD700',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFD700',
    },
  },
});

// Function to create a particle effect
const createParticle = () => {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  document.body.appendChild(particle);

  const size = Math.random() * 5 + 3; // Random size between 3px and 8px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const left = Math.random() * window.innerWidth;
  const top = Math.random() * window.innerHeight;
  particle.style.left = `${left}px`;
  particle.style.top = `${top}px`;

  // Animation timing
  const animationDuration = Math.random() * 3 + 2; // Random duration for animation
  particle.style.animation = `moveParticle ${animationDuration}s linear infinite`;

  setTimeout(() => {
    particle.remove(); // Remove particle after animation is done
  }, animationDuration * 1000);
};

const Contact = () => {
  useEffect(() => {
    const particleInterval = setInterval(createParticle, 100); // Create a particle every 100ms

    return () => clearInterval(particleInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <GradientBackground>
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: '700',
            color: '#FFD700',
            fontSize: '3.5rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{
            mb: 4,
            textAlign: 'center',
            color: '#E0E0E0',
            fontSize: '1.2rem',
            lineHeight: 1.8,
            fontWeight: '300',
          }}
        >
          Have questions about our premium trading services or need assistance? Connect with us today and let’s build your financial future together.
        </Typography>

        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField fullWidth label="First Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField fullWidth label="Last Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <InputField fullWidth label="Email Address" type="email" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <InputField fullWidth label="Subject" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <InputField fullWidth label="Message" multiline rows={4} variant="outlined" required />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <CustomButton variant="contained" color="primary" size="large" type="submit">
                Submit
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </GradientBackground>
  );
};

export default Contact;
