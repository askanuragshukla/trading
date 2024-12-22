import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram'; // Import necessary icons
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';

export default function StatisticCard() {
  const statistics = [
    { icon: <InstagramIcon />, value: '100k+', label: 'Instagram Followers' },
    { icon: <SubscriptionsOutlinedIcon />, value: '23.4K+', label: 'YouTube Subscribers' },
    { icon: <MenuBookIcon />, value: '74+', label: 'Batches Completed' },
    { icon: <SchoolIcon />, value: '40K+', label: 'Students Enrolled' },
  ];

  return (
    <Card sx={{ bgcolor: '#38386d', color: 'white', borderRadius: '16px', p: 3 }}> {/* Apply styling */}
      <CardContent>
        <Grid container spacing={4} justifyContent="space-around" alignItems="center"> {/* Use Grid for layout */}
          {statistics.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} textAlign="center"> {/* Responsive grid items */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ fontSize: '2rem', mb: 1 }}>{stat.icon}</Box> {/* Icon size */}
                <Typography variant="h5" fontWeight="bold">
                  {stat.value}
                </Typography>
                <Typography variant="body2">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}