import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

// Placeholder image, replace with your actual image
const placeholderImage = "https://via.placeholder.com/300x200"; // Or import your image

export default function QuantInvestingCard() {
  return (
    <Card sx={{ display: 'flex', boxShadow: 3, margin: 2 }}> {/* Added margin and boxShadow */}
      <Grid container>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 'auto' }} // Responsive image
            image={placeholderImage} // Replace with your image path
            alt="Jim Simons"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent sx={{ flex: '1 0 auto', padding: 3 }}> {/* Increased padding */}
            <Typography component="div" variant="h5">
              The "Quant King"
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}> {/* Added margin top */}
              The advantage scientists bring into investing is that they have a certain rigor, a certain critical attitude, that can be very useful.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}> {/* Added margin top */}
              At Astratinvest, we embrace the rigorous, analytical mindset championed by pioneering quant experts like Jim Simons. Our strategy revolves around quantitative research and data-driven modeling. We employ a team dedicated to developing unique, bespoke quant models. Through systematic and disciplined analysis of vast datasets using our proprietary system, we extract invaluable insights. This enables us to identify high-quality investment opportunities across the listed Indian market to generate alpha. Our adherence to strict quantitative investing principles, coupled with our focus on the Indian market, sets us apart.
            </Typography>
            <Box sx={{ mt: 2 }}> {/* Added margin top */}
              <Link href="#" variant="body2"> {/* Replace # with your link */}
                Learn More About Quant Investing
              </Link>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}