import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Card, CardContent, Typography, CardHeader, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';

// Array of testimonials data
const data = [
    {
        name: 'Rahul Sharma',
        location: 'Mumbai, India',
        description: '"Investing in the stock market has transformed my financial journey. The guidance provided here has been invaluable. The step-by-step approach to identifying stocks and understanding market trends has made me confident in making sound financial decisions."',
    },
    {
        name: 'Sneha Kapoor',
        location: 'Delhi, India',
        description: '"The stock market seemed overwhelming, but the clear strategies and tips shared here made all the difference. I went from being a complete novice to someone who can confidently discuss market opportunities."',
    },
    {
        name: 'Ankit Verma',
        location: 'Bangalore, India',
        description: '"I never realized how accessible smart investments could be until I started learning from this platform. Their real-time updates and educational resources have been a game-changer for my portfolio."',
    },
    {
        name: 'Pooja Singh',
        location: 'Chennai, India',
        description: '"This has been a game-changer for achieving my financial goals through disciplined investing. The workshops and tutorials provided are engaging and easy to understand, even for beginners like me."',
    },
    {
        name: 'Arjun Patel',
        location: 'Ahmedabad, India',
        description: '"The insights shared here gave me a better understanding of market trends and opportunities. Their focus on long-term investing strategies has significantly improved my returns."',
    },
];

// StyledCard component for shiny white border and increased height
const StyledCard = styled(Card)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.15)', // Transparent glassy background
    border: '1px solid rgba(255, 255, 255, 0.5)', // Semi-transparent white border
    backdropFilter: 'blur(10px)', // Glass blur effect
    borderRadius: '16px',
    color: 'white',
    textAlign: 'left',
    padding: theme.spacing(3),
    height: '400px', // Increased height for longer descriptions
    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)', // Shiny white shadow
    transformStyle: 'preserve-3d',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'rotateY(10deg) scale(1.02)', // Subtle 3D hover effect
        borderColor: 'white', // Makes the border shinier on hover
        boxShadow: '0 10px 40px rgba(255, 255, 255, 0.8)', // Stronger shadow on hover
    },
}));

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ py: 8, px: 4, background: 'linear-gradient(to bottom right, #0a1128, #001f54)', color: 'white' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#ecaeff' }}>
                TESTIMONIALS
            </Typography>
            <Typography variant="h5" align="center" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 'light' }}>
                Hear From Our Users
            </Typography>
            <Typography variant="body1" align="center" gutterBottom sx={{ mb: 6 }}>
                Discover How We Made a Difference
            </Typography>

            <Slider {...settings}>
                {data.map((item, index) => (
                    <Box key={index} sx={{ padding: '0 10px' }}>
                        <StyledCard>
                            <CardHeader
                                sx={{
                                    color: 'white',
                                    '.MuiCardHeader-subheader': {
                                        color: '#d4af37', // Luxurious gold color for the location
                                        fontStyle: 'italic', // Adds an elegant touch
                                        fontWeight: 'bold', // Makes it stand out
                                        fontSize: '1rem', // Adjust the size for better readability
                                    },
                                    '.MuiCardHeader-title': {
                                        fontWeight: 'bold', // Emphasize the name
                                        fontSize: '1.2rem', // Slightly larger font for the name
                                    },
                                }}
                                avatar={
                                <Avatar
                                sx={{
                                bgcolor: 'transparent', // Remove background color
                                border: '1px solid white', // Add white border
                                color: 'white', // Make text white
                                }}
                                aria-label="user"
                                >
                                {item.name[0]}
                                </Avatar>
                                }
                                title={item.name}
                                subheader={item.location}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="p" color="#fff">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
