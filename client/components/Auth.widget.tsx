import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { CenteredWrapper } from './Centered.wrapper';

type AuthButtonProps = {
  text: string,
  disabled: boolean
}
const AuthButton = ({ text, disabled }: AuthButtonProps) => (
  <Button
    variant="contained"
    size="large"
    color="error"
    disableElevation
    sx={{
      borderRadius: 6,
      mb: '1rem',
      minWidth: '8.5rem',
    }}
    disabled={disabled}
  >
    {text}
  </Button>
);

const AuthWidget = () => {
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
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ pb: '3rem' }} order={{ xs: 2, sm: 1}}>
          <Image src="/img/sign.svg" alt="" width="367" height="320" />
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2}}>
          <Box sx={{ mt: '1rem', mb: '3rem' }}>
            <Typography
              variant="body2"
              color="grey.50"
              align="center"
              sx={{ mb: '1rem' }}
            >
              Join us
            </Typography>
          </Box>
          <Stack direction="column" alignItems="center" sx={{ mb: '1rem' }}>
            <AuthButton text="Log in" disabled/>
            <AuthButton text="Sign in" disabled/>
            <Link href="/dashboard">
              <a>
                <AuthButton text="As a guest" disabled={false}/>
              </a>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </CenteredWrapper>
  );
};

export default AuthWidget;
