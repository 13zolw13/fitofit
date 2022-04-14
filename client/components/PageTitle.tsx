import { Box, Typography } from '@mui/material';
import React from 'react'

type PageTitleProps = {
  text: string;
}

export const PageTitle = ({text}: PageTitleProps) => {
  return (
    <Box
      sx={{
        p: '1rem 0 2rem',
      }}
    >
      <Typography component="h2" sx={{ color: 'primary.main' }} textTransform="uppercase" fontSize="1.75rem" fontWeight="500">
        {text}
      </Typography>
    </Box>
  );
}
