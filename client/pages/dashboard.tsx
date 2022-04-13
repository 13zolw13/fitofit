import { Box, Icon } from '@mui/material';
import axios from 'axios';
import { endpoints } from 'data/endpoints';
import type { NextPage } from 'next';
import * as React from 'react';

const Dashboard: NextPage = () => {
  React.useEffect(() => {
    const getWorkout = async () => {
      const data = await axios.get(endpoints.WORKOUTAPI);
    };
    getWorkout();
  }, []);
  return (
    <Box>
      Start app here<Icon>star</Icon>
    </Box>
  );
};

export default Dashboard;
