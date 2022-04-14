import { Box, CircularProgress, Grid, Icon, Typography } from '@mui/material';
import axios from 'axios';
import { ShortSummaryWidget, WeekMonthSummaryWidget, WorkoutListWidget } from 'components';
import { endpoints } from 'data/endpoints';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { useQuery } from 'react-query';

import { CATEGORIES_QUERY,SUMMARY_LAST_7_DAYS, SUMMARY_LAST_30_DAYS,TODAY_WORKOUT_QUERY } from '../queryKeys';
import { MockWorkoutApi } from '../test/MockWorkoutApi';

const Dashboard: NextPage = () => {
  const todayWorkout = useQuery(
    TODAY_WORKOUT_QUERY,
    MockWorkoutApi.getTodayWorkouts,
    { retry: false, refetchOnWindowFocus: false },
  );

  return (
    <>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Daily summary
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={5} order={{ sx: 2, sm: 1 }}>
          {todayWorkout.data && todayWorkout.data.items.length === 0 && (
            <Image
              src="/img/load.svg"
              width="881"
              height="737"
              alt="No workouts today"
            />
          )}
          {todayWorkout.data && todayWorkout.data.items.length !== 0 && (
            <Image
              src="/img/welldone.svg"
              width="881"
              height="737"
              alt="No workouts today"
            />
          )}
        </Grid>
        <Grid item xs={12} sm={7} order={{ sx: 1, sm: 2 }}>
          {todayWorkout.isLoading && !todayWorkout.data && <CircularProgress />}
          {todayWorkout.data && todayWorkout.data.items.length !== 0 && (
            <>
              <Typography variant="h3">
                Great! We hope you enjoyed your last workout!
              </Typography>
              <Box sx={{ p: '0.5rem' }}>
                <WorkoutListWidget workoutList={todayWorkout.data} />
              </Box>
            </>
          )}
          {todayWorkout.data && todayWorkout.data.items.length === 0 && (
            <>
              <Box sx={{ p: '0.5rem' }}>
                <Typography variant="h3">
                  Hi Potato! What do you think about next workout?
                </Typography>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
      <WeekMonthSummaryWidget />
    </>
  );
};

export default Dashboard;
