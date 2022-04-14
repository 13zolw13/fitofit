import {
  Alert,
  Box,
  CircularProgress,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';

import { WorkoutListWidget } from '../components';
import { LAST_7_DAYS_WORKOUT_QUERY } from '../queryKeys';
import { MockWorkoutApi } from '../test/MockWorkoutApi';

type LogListNames = 'week' | 'month' | 'quarter';

const LogPage = () => {
  const { data, isLoading, isError } = useQuery(
    LAST_7_DAYS_WORKOUT_QUERY,
    MockWorkoutApi.getLastWeekWorkouts,
    { retry: false, refetchOnWindowFocus: false },
  );
  const [chosenLogList, setChosenLogList] =
    React.useState<LogListNames>('week');

  const handleLogChange = (
    event: React.MouseEvent<HTMLElement>,
    newLog: LogListNames,
  ) => {
    setChosenLogList(newLog);
  };

  return (
    <>
      <Typography variant="h2">Workout logs</Typography>
      <ToggleButtonGroup
        size="small"
        color="primary"
        value={chosenLogList}
        exclusive
        onChange={handleLogChange}
        sx={{ m: '1rem 0' }}
      >
        <ToggleButton value="week">Last week</ToggleButton>
        <ToggleButton value="month">Last month</ToggleButton>
        <ToggleButton value="quarter">Last quarter</ToggleButton>
      </ToggleButtonGroup>

      {isLoading && <CircularProgress />}
      {!isLoading && data && data.items.length === 0 && (
        <Alert severity="warning">
          Strange, no workouts in our database. Check later!
        </Alert>
      )}
      {!isLoading && data && data.items.length !== 0 && (
        <>
          <WorkoutListWidget workoutList={data} />
        </>
      )}
    </>
  );
};

export default LogPage;
