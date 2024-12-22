import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link'; // Import Link for navigation

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0A1929', color: 'white', py: 4, px: { xs: 2, md: 6 } }}>
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center">
            <Box component="img" src="https://pics.craiyon.com/2023-11-15/ZaOjcUSYR0aQnt2dZZPKiw.webp" alt="Big Profits Logo" sx={{ height: 60, mr: 2 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: 'Roboto, sans-serif' }}>Big Profits</Typography> {/* Updated font family */}
          </Box>
          <Typography variant="body2" mt={2} sx={{ fontFamily: 'Roboto, sans-serif' }}>
            Big Profits - Empowering your financial journey through expert trading in commodities, stocks, and currency markets.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>EXPLORE</Typography>
              <Link href="#" color="inherit" display="block" underline="hover" sx={{ fontFamily: 'Roboto, sans-serif' }}>About Us</Link>
              <Link href="#" color="inherit" display="block" underline="hover" sx={{ fontFamily: 'Roboto, sans-serif' }}>Market Insights</Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>TRADING SERVICES</Typography>
              <Link href="#" color="inherit" display="block" underline="hover" sx={{ fontFamily: 'Roboto, sans-serif' }}>Commodity Trading</Link>
              <Link href="#" color="inherit" display="block" underline="hover" sx={{ fontFamily: 'Roboto, sans-serif' }}>Currency Trading</Link>
              <Link href="#" color="inherit" display="block" underline="hover" sx={{ fontFamily: 'Roboto, sans-serif' }}>Stock Market Analysis</Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>LEGAL</Typography>
              <Link href="#" color="inherit" display="block" underline="hover" sx={{ fontFamily: 'Roboto, sans-serif' }}>Privacy Policy</Link>
              <Link href="#" color="inherit" display="block" underline="hover" sx={{ fontFamily: 'Roboto, sans-serif' }}>Terms & Conditions</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box mt={4} borderTop="1px solid #444" pt={2} textAlign="center">
        <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
          © {new Date().getFullYear()} Big Profits™. All Rights Reserved. <br />
          BIG PROFITS TRADE SERVICES PVT LIMITED
        </Typography>
      </Box>
    </Box>
  );
}
