import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar,Box } from '@mui/material';
import StatisticCard from './StatisticCard'
import ParticleGraphEffect from './ParticleGraphEffect';
const About = () => {

    const cardData = [
        "Trading Courses",
        "Stock Market Trading",
        "Commodity",
        "Risk Analysis",
        "Currency",
        "Stratergies"
      ];
      


  return (
    <>
    <div style={{backgroundColor:'#ECF0F5'}}>
      {/* About Us Section */}
      <Box sx={{marginTop:'-40px',height:'300px',width:'100%',color:'white',background: 'rgb(2,0,36) linear-gradient(329deg, rgba(2,0,36,1) 0%, rgba(26,26,93,1) 74%, rgba(0,212,255,1) 100%)'}}>
      <Typography variant="h4" component="h1" sx={{ textAlign:'center', letterSpacing:'0.02em', mb: 4,fontSize:'9.8vh',marginTop:10,paddingTop:8 }}>
        Why Choose Big Profits?
      </Typography>
      {/* <Typography variant="body1" color="white" paragraph>
        TradeMaster is a leading platform dedicated to empowering individuals to achieve financial independence through
        expert trading and investment knowledge. With years of experience in the stock market, our team of professionals
        is committed to providing top-notch courses, tools, and insights to help you navigate the complexities of trading
        and investing.
      </Typography> */}
      <Typography sx={{textAlign:'center'}} variant="body1" color="white" paragraph>
        Our mission is to simplify trading for everyone, whether you're a beginner taking your first steps or an advanced
        trader looking for cutting-edge strategies.
      </Typography>
      </Box>
      

      {/* Our Team Section */}
      <Container >
      <Grid container spacing={2} sx={{marginTop:10}}>
      {cardData.map((text, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{marginBottom:2}}> {/* Adjust xs, sm, md for responsiveness */}
          <Card
            sx={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)', // Scale the card slightly on hover
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{
                    textAlign:'center',
                  color: 'royalblue', // Set text color to royal blue
                  '&:hover': {
                    color: 'darkblue', // Change color on hover
                  },
                  transition: 'color 0.3s ease', // Smooth transition for text color change
                }}
              >
                {text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

      <Typography variant="h5" component="h2" sx={{ textAlign:'center', mt: 8, mb: 4 }}>
        Meet Our Intelligent Team
      </Typography>
      <Grid container spacing={4}>
        {teamData.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card sx={{ textAlign: 'center' }}>
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{ width: 80, height: 80, margin: '16px auto' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{marginTop:8,marginBottom:8}}>
      <StatisticCard />
      </Box>
      
      </Container>
      </div>
    </>
  );
};

const teamData = [
  {
    id: 1,
    name: 'Anurag Shukla',
    role: 'Chief Executive Officer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s',
  },
  {
    id: 2,
    name: 'Vilas K',
    role: 'Head of Education',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpxpz-RYLeitDMP46KejfI30FGSEpfrBwag&s',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Senior Market Analyst',
    image: 'https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp',
  },
];

export default About;
