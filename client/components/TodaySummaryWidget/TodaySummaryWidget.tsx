import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { WorkoutListWidget } from 'components/WorkoutList.widget';
import Image from 'next/image';
import { TODAY_WORKOUT_QUERY } from 'queryKeys';
import React from 'react';
import { useQuery } from 'react-query';
import { MockWorkoutApi } from 'test/MockWorkoutApi';

export const TodaySummaryWidget = () => {
  const todayWorkout = useQuery(
    TODAY_WORKOUT_QUERY,
    MockWorkoutApi.getTodayWorkouts,
    { retry: false, refetchOnWindowFocus: false },
  );
  return (
    <Grid container sx={{ pt: '2rem' }}>
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
            <Typography variant="h3" fontWeight="400">
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
              <Typography variant="h3" fontWeight="400">
                Hi Potato! What do you think about next workout?
              </Typography>
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};
