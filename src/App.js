import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import ContactInfo from './components/ContactInfo';

const App = () => {

  const theme = createTheme({
    typography: {
      fontFamily: '"Lora", serif', // Apply Lora font globally
    },
  });

  return (
    <Router>
    ;

<AppBar position="fixed" sx={{ background: 'linear-gradient(135deg, #0a1f44 0%, #1f2a44 100%)', boxShadow: 3, color: 'white' }}>
  
  <Toolbar>
    <Typography 
      variant="h5" 
      sx={{ 
        flexGrow: 1, 
        fontFamily: '"Roboto Slab", serif', 
        fontWeight: 600, 
        letterSpacing: 1.5, 
        fontSize: '1.8rem', 
        textTransform: 'uppercase' 
      }}
    >
      Big Profits
    </Typography>
    <Button 
      color="inherit" 
      component={Link} 
      to="/" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      Home
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/about" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      About
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/courses" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      Courses
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/services" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize', marginRight: 2 }}
    >
      Services
    </Button>
    <Button 
      color="inherit" 
      component={Link} 
      to="/contact" 
      sx={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500, fontSize: '1rem', letterSpacing: 1, textTransform: 'capitalize' }}
    >
      Contact
    </Button>
  </Toolbar>
</AppBar>

      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
       

  );
};

export default App;
