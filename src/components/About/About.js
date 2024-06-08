import { Box, Container, Typography, Link } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Box id='about' sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#f5f5f5',
            py: 4
        }}>
            <Container maxWidth="md">
                <Typography sx={{ color: 'primary.main', mx: 2, p: 2, textAlign: "center" }}
                    variant='h4'>
                    Comprehensive Mental Health Solutions
                </Typography>

                <Typography sx={{ mx: 2, p: 2, textAlign: "center" }}
                    variant='h6'>
                    Over a Decade of Experience in Mental Health Care
                </Typography>

                <Typography sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
                    variant='body1'>
                    At Inner Balance Clinic, we believe that mental health care should be accessible, compassionate, and effective. Our team of experienced professionals has been dedicated to providing top-tier mental health services for over ten years. We understand the unique challenges that come with mental health issues and are committed to helping our patients achieve lasting wellness.<br /><br />

                    Unlike many other mental health platforms, our approach focuses on holistic and individualized care. We strive to create a supportive environment where patients feel heard and understood. Our reviews and feedback systems are designed to reflect genuine patient experiences, free from bias and negativity.<br /><br />

                    We encourage you to share your experiences with Inner Balance Clinic on <strong>Inner Balance Clinic</strong>. Whether your experience was positive or had areas for improvement, your feedback is invaluable in helping us continue to improve our services. Connect with us on Facebook for more updates and support:
                    <Link href="https://github.com/Jayanth-sanku/" target="_blank" rel="noopener noreferrer">
                        @InnerBalanceClinic
                    </Link>.
                    <br /><br /><br />
                </Typography>

            </Container>
        </Box>
    );
};

export default About;
