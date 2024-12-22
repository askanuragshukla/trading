import * as React from 'react';
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

export default function QuantSection() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, padding: 6, background: 'linear-gradient(135deg, #0a1f44 0%, #1f2a44 100%)' }}>
      {/* Inject keyframes animation */}
      <style>{floatUpDown}</style>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        
        <Grid item xs={12} md={10}>
          <Box sx={{ borderBottom: '3px solid #ffffff', width: '100%' }} />
          <Typography variant="h5" sx={{ textAlign: 'center', mt: 3, fontWeight: 600, fontSize: '1.8rem', color: '#ffffff' }}>
            Advanced Trading Strategies for Indian Markets
          </Typography>
        </Grid>
      
      </Grid>

      <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, color: '#ffffff', fontWeight: 500, fontSize: '1.4rem' }}>
        Custom-built trading stratergies tailored to India's stock, commodity, and currency markets
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'center', mt: 2, color: '#E0E0E0', maxWidth: '80%', margin: '0 auto', fontSize: '1.2rem' }}>
        Our trading strategies are meticulously crafted to capture the unique dynamics of the Indian stock market, commodities, and currency exchanges, offering a distinct edge over conventional approaches.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid item xs={12} sm={4}>
          <Item delay="0s">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.3rem', color: '#ffffff' }}>Stock Market Trading & Risk Management</Typography>
            <Typography variant="body2" sx={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#E0E0E0' }}>
              With India's stock market being dynamic and diverse, our advanced risk management techniques ensure optimal position sizes, managing volatility, and securing returns while minimizing risk exposure.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item delay="0.5s">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.3rem', color: '#ffffff' }}>Commodity & Futures Trading</Typography>
            <Typography variant="body2" sx={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#E0E0E0' }}>
              Our commodity strategies target Indian futures markets such as gold, crude oil, and agricultural commodities, leveraging market trends, supply-demand imbalances, and geopolitical events to predict price movements.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item delay="1s">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.3rem', color: '#ffffff' }}>Currency Market & Hedging</Typography>
            <Typography variant="body2" sx={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#E0E0E0' }}>
              Our currency trading strategies focus on the Indian Rupee (INR) and its interaction with global currencies. Using advanced algorithms, we predict exchange rate fluctuations and hedge against potential risks effectively.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
