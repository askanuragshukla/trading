import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactInfo = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a1f44 0%, #1f2a44 100%)', // Deep red color
        color: 'white',
        paddingY: 2, // MUI spacing for vertical padding
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 2, md: 4 }, // Responsive horizontal padding
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}> {/* Phone */}
          <IconButton sx={{ color: 'white' }} aria-label="phone">
            <PhoneIcon />
          </IconButton>
          <Typography variant="body2" sx={{ ml: 1 }}>
            <Link href="tel:+919156104002" color="inherit" underline="none">
              +91 9156104002
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Email */}
          <IconButton sx={{ color: 'white' }} aria-label="email">
            <EmailIcon />
          </IconButton>
          <Typography variant="body2" sx={{ ml: 1 }}>
            <Link href="mailto:support@cyberkingcapitals.com" color="inherit" underline="none">
              support@cyberkingcapitals.com
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Social Icons */}
        <IconButton sx={{ color: 'white' }} aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }} aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }} aria-label="instagram">
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactInfo;