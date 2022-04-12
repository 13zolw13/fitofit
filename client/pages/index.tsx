import * as React from 'react';
import {
  Box,
} from "@mui/material";

import type { NextPage } from "next";
import axios from 'axios';
import { endpoints } from "data/endpoints";


const Home: NextPage = () => {
  React.useEffect(() => {
    const getWorkout = async () => {
      const data = await axios.get(endpoints.WORKOUTAPI);
      console.log(data);
    }
    getWorkout()
  }, []);
  return (
    <Box>Start app here</Box>
  );
};

export default Home;

