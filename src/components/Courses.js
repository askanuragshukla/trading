import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Modal, Box } from '@mui/material';

const coursesData = [
  {
    id: 1,
    title: 'Beginner Stock Market Course',
    description: 'Learn the basics of stock market investing and trading.',
    image: 'https://static.wixstatic.com/media/346fe1_d66d7fb7a7fb4afb94c73e50f632701e~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/346fe1_d66d7fb7a7fb4afb94c73e50f632701e~mv2.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Advanced Trading Strategies',
    description: 'Master advanced techniques for trading success.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1Hln3tKwtVmo3HFUtZQihUXQ0cmCJe5DQGbf6b2TfGshfIxzY0Bv7VNQzB_QeOgDakQ&usqp=CAU',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    id: 3,
    title: 'Options Trading Masterclass',
    description: 'Specialize in options trading with expert guidance.',
    image: 'https://img.freepik.com/free-photo/staff-team-analyzing-trends-help-making-crucial-decisions_482257-97970.jpg',
    videoUrl: 'https://www.youtube.com/embed/sBws8MSXN7A',
  },
  {
    id: 4,
    title: 'Technical Analysis Workshop',
    description: 'Decode charts and indicators to maximize profits.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4_5dUg6in26qWQd13pg9vlb7fytYGX2SNTQTzNE-peU7Ke6fS_ajR3j307UdK-H2INE&usqp=CAU',
    videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
  },
  {
    id: 5,
    title: 'Long-Term Investment Strategies',
    description: 'Build wealth through smart, long-term investments.',
    image: 'https://resources.reed.co.uk/courses/coursemedia/495518/0aab5a64-e63f-4c9e-b63b-17ee4cedc778_cover.webp',
    videoUrl: 'https://www.youtube.com/embed/tFq7FzW-cII',
  },
];

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleOpen = (url) => {
    setVideoUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoUrl('');
  };

  return (
    <>
      <div style={{ backgroundColor: '#ECF0F5' }}>
        <Box
          sx={{
            marginTop: '-40px',
            height: '300px',
            width: '100%',
            color: 'white',
            background:
              'rgb(2,0,36) linear-gradient(329deg, rgba(2,0,36,1) 0%, rgba(26,26,93,1) 74%, rgba(0,212,255,1) 100%)',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              textAlign: 'center',
              letterSpacing: '0.02em',
              mb: 4,
              fontSize: '9.8vh',
              marginTop: 10,
              paddingTop: 8,
            }}
          >
            Learn From The Best
          </Typography>
          <Typography sx={{ textAlign: 'center' }} variant="body1" color="white" paragraph>
            Our mission is to simplify trading for everyone, whether you're a beginner taking your first steps or an
            advanced trader looking for cutting-edge strategies.
          </Typography>
        </Box>

        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Grid container spacing={4} justifyContent="center">
            {coursesData.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    '&:hover': { boxShadow: 6 },
                    transition: 'all 0.3s',
                    height: '100%', // Ensure the card takes full available height
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={course.title}
                    height="160"
                    image={course.image}
                    sx={{
                      objectFit: 'cover',
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                  />
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1 }}>
                      {course.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => handleOpen(course.videoUrl)}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '80%', height: '80%', bgcolor: 'white', borderRadius: 2, boxShadow: 24 }}>
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="Course Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Modal>
        </Container>
      </div>
    </>
  );
};

export default Courses;
