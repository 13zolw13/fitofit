import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
const Wrapper = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
});

const Landing = () => {
  return (
    <Wrapper>
      <Container maxWidth="md" sx={{p: 0}}>
        <Card
          variant="outlined"
          sx={{
            p: '2rem',
            borderRadius: 6,
            backgroundColor: (theme) => theme.palette.landing.bgcolor,
          }}
        >
          <Typography
            variant="h1"
            color="white"
            align="center"
            sx={{ mt: 3, mb: 4 }}
          >
            El Trackero App
          </Typography>
          <Image src="/img/finish.svg" alt="" width="1340" height="782" />
          <Box sx={{ mt: '3rem', mb: '3rem' }}>
            <Typography
              variant="body2"
              color="grey.50"
              align="center"
              sx={{ mb: '1rem' }}
            >
              Exercise. Track. And Win!
            </Typography>
            <Typography variant="body1" color="white" align="center">
              Give yourself a chance and try to organize your workouts with us.
            </Typography>
          </Box>
          <Stack direction="row" justifyContent="center" sx={{mb: '1rem'}}>
            {' '}
            <Link href="/auth">
              <a>
                <Button
                  variant="contained"
                  size="large"
                  color="error"
                  disableElevation
                  sx={{ borderRadius: 6, margin: '0 auto', p: '0.75rem 1.5rem', fontSize: '1.2rem' }}
                >
                  Take a risk
                </Button>
              </a>
            </Link>
          </Stack>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Landing;
