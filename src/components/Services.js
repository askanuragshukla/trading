import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const Services = () => {
  return (
    <>
      <div >
        <Box sx={{
          marginTop: '-40px',
          height: '300px',
          width: '100%',
          color: 'white',
          background: 'rgb(2,0,36) linear-gradient(329deg, rgba(2,0,36,1) 0%, rgba(26,26,93,1) 74%, rgba(0,212,255,1) 100%)',
        }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              textAlign: 'center',
              letterSpacing: '0.01em',
              mb: 4,
              fontSize: '8vh',
              marginTop: 10,
              paddingTop: 8,
           //   fontFamily: '"Montserrat", sans-serif',
            }}
          >
            What do we provide?
          </Typography>
          <Typography sx={{ textAlign: 'center' }} variant="body1" color="white" paragraph>
            At TradeMaster, we offer a variety of services tailored to meet the needs of traders and investors at every level.
            Our solutions are designed to empower you with the tools, knowledge, and insights needed to succeed in the financial markets.
          </Typography>
        </Box>

        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Grid container spacing={4}>
            {servicesData.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card sx={{
                 // backgroundColor: '#2C3E50',
                 height:300,
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}>
                  <CardMedia
                    component="img"
                    alt={service.title}
                    height="160"
                    image={service.image}
                    sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph sx={{ fontFamily: '"Roboto", sans-serif' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

const servicesData = [
  {
    id: 1,
    title: 'Trading In Indian Market',
    description: 'Stratergies proven to work on indian stock market.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzZxUHkoSW9BM9IeGozW2k6g4xuTdIWKibw&s',
    link: '#',
  },
  {
    id: 2,
    title: 'Market Research Reports',
    description: 'Access exclusive market insights and expert analysis.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqV91W4u93vcSxqn9cZwLELF9cqbw89eGVA&s',
    link: '#',
  },
  {
    id: 3,
    title: 'Commodity Trading',
    description: 'Receive instant alerts for profitable trades.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGm29vkhOW-41AfeWAE_8CmRe4YsDR7D-Ig&s',
    link: '#',
  },
  {
    id: 4,
    title: 'Portfolio Management',
    description: 'Let our experts manage your investments for optimal returns.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHkRVTS0ksdaDtNNfuueGfSwbQVe4Yp4cItp6POuzEXAq0npKiXmTg5v6mv1wJT1QfJo&usqp=CAU',
    link: '#',
  },
  {
    id: 5,
    title: 'Currency Trading',
    description: 'industry professionals Currency Traders.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR058QNcm_sdDq1saEK5MhwHRmuN2C6xrPqQ&s',
    link: '#',
  },
  {
    id: 6,
    title: 'Trading Tools and Chart Pattren',
    description: 'Leverage advanced algorithms for automated trading.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnlACqvSISUsSzo6GcqixAlG0LsHDJnM2aA&s',
    link: '#',
  },
];

export default Services;
