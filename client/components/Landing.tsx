import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import {CenteredWrapper} from './Centered.wrapper';

const Landing = () => {
  return (
    <CenteredWrapper>
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
      <Stack direction="row" justifyContent="center" sx={{ mb: '1rem' }}>
        {' '}
        <Link href="/auth">
          <a>
            <Button
              variant="contained"
              size="large"
              color="error"
              disableElevation
              sx={{
                borderRadius: 6,
                margin: '0 auto',
                p: '0.75rem 1.5rem',
                fontSize: '1.2rem',
              }}
            >
              Take a risk
            </Button>
          </a>
        </Link>
      </Stack>
    </CenteredWrapper>
  );
};

export default Landing;
