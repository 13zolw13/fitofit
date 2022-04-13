import { Box, Grid, Stack } from '@mui/material';
import { OutputWorkOutDto } from '../dto/outputWorkOut';
import { getFormattedDateComponents } from '../utils';

type WorkoutListElementProps = {
  workout: OutputWorkOutDto;
};

export const WorkoutListElement = ({ workout }: WorkoutListElementProps) => {
  const { workoutDate, workoutTime, workoutWeekDay } =
    getFormattedDateComponents(workout.date);
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ p: '1rem 0', width: "100%" }}>
      <Box>
        <Stack direction="row">
          <Box sx={{ width: '7rem' }}>{workoutDate}</Box>
          <Box sx={{ width: '3.5rem' }}>{workoutTime}</Box>
          <Box sx={{ width: '3.5rem' }}>{workoutWeekDay}</Box>
        </Stack>
      </Box>
      <Box sx={{ minWidth: '7rem' }}>{workout.categoryWorkOut}</Box>
      <Box sx={{ minWidth: '5rem' }}>{workout.time} min</Box>
      <Box sx={{ minWidth: '7rem' }}>{workout.difficulty} workout</Box>
    </Stack>
  );
};
