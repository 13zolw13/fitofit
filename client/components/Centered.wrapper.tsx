import { Box, Card, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const Wrapper = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
});

type CenteredWrapperProps = {
  children: JSX.Element | JSX.Element[],
}

export const CenteredWrapper = ({children}: CenteredWrapperProps) => {
  return (
    <Wrapper>
      <Container maxWidth="md" sx={{ p: 0 }}>
        <Card
          variant="outlined"
          sx={{
            p: '2rem',
            borderRadius: 6,
            backgroundColor: (theme) => theme.palette.landing.bgcolor,
          }}
        >
          {children}
        </Card>
      </Container>
    </Wrapper>
  );
};

