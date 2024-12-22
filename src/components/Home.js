import React, { useState } from 'react';
import { Container, Typography, Button, Grid,Card } from '@mui/material';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import QuantInvestingCard from './QuantInvestingCard';
import QuantSection from './QuantSection';
import Testimonials from './Testimonials';
import Hero from './Hero';
import StockMarketPage from './StockMarketPage';
import sm1 from './images/sm1.png'
import sm2 from './images/sm2.avif'
import ContactInfo from './ContactInfo';
const Home = () => {
  return (

    <div style={{marginTop:16}} >
       
      {/* Hero Section */}
      <style>
        {`
          @keyframes floating {
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
        `}
      </style>
   <Hero />
   <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ padding: '2rem',marginTop:8,marginBottom:8 }}>
  <Grid item xs={12} md={6}>
    <motion.img
      src={sm1}
      alt="Market Investment Illustration"
      style={{
        height: '450px',  // Adjust height to a smaller size
        width: '450px',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          lineHeight: 1.4,  // Increased line-height for better spacing
          fontSize: '2.5rem',  // Adjusted font size
        }}
      >
        Maximize Your Investment Potential
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        paragraph
        sx={{
          fontStyle: 'italic',
          fontWeight: 400, // Lighter weight for better balance
          maxWidth: '450px',
          marginBottom: '2rem',
          fontSize: '1.1rem',  // Adjusted font size for clarity
        }}
      >
        Unlock the full potential of market investments with expert strategies, real-time analysis, and proven techniques to make informed investment decisions.
      </Typography>

      {/* Cards for Total Investors and Total Profit */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: 3,
              borderRadius: '10px',
              animation: 'floating 2s infinite ease-in-out',
            }}
          >
            <Typography variant="h5" color="primary" sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
              Total Investors on Board
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '2rem' }}>
              1,200+
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: 3,
              borderRadius: '10px',
              animation: 'floating 2s infinite ease-in-out',
            }}
          >
            <Typography variant="h5" color="primary" sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
              Total Profit Earned
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '2rem' }}>
              $850K+
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  </Grid>
</Grid>


      <QuantSection />
    
      <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ padding: '2rem',marginTop:8,marginBottom:8 }}>
    <Grid item xs={12} md={6}>
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    >
    <Typography
    variant="h3"
    component="h1"
    gutterBottom
    sx={{
        fontWeight: 700,
        color: 'primary.main',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        lineHeight: 1.2,
    }}
    >
    Master the Stock Market
    </Typography>
    <Typography
    variant="h6"
    color="textSecondary"
    paragraph
    sx={{
        fontStyle: 'italic',
        fontWeight: 500,
        maxWidth: '450px',
        marginBottom: '2rem',
    }}
    >
    Join the league of expert traders and investors with our cutting-edge courses and advanced trading tools.
    </Typography>
    
    </motion.div>
    </Grid>
    <Grid item xs={12} md={6}>
    <motion.img
    src={sm2}
    alt="Stock Market Illustration"
    style={{
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    />
    </Grid>
    </Grid>
      <Testimonials />
      <StockMarketPage />
     
   
    </div>
    
  );
};

export default Home;
