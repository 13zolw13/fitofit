import TimelineIcon from '@mui/icons-material/Timeline';
import TimerIcon from '@mui/icons-material/Timer';
import { Box,Stack } from "@mui/material";
import { SummaryWorkoutDto } from "dto";
import { formatMinutesToHours } from 'utils';

import { WorkoutCategoryBox } from "./WorkoutCategoryBox";
import { WorkoutStatisticLine } from "./WorkoutStatisticLine";

type WorkoutStatisticBoxProps = {
  data: SummaryWorkoutDto;
  image: JSX.Element;
}
export const WorkoutStatisticBox = ({ data, image }: WorkoutStatisticBoxProps) => {
  return (

      <Stack
        sx={{
          display: 'inline-flex',
          marginRight: 'auto',
        }}
      >
        <WorkoutStatisticLine
          materialIconComponent={<TimelineIcon />}
          numberString={data.sumWorkoutsNumber.toString()}
          isNumberBigger
          description="workouts"
        />
        <WorkoutStatisticLine
          materialIconComponent={<TimerIcon />}
          numberString={formatMinutesToHours(data.sumWorkoutsTime)}
          description="hours"
        />
        <Box
          sx={{
            width: '60%',
            display: 'inline-block',
          }}
        >
          {image}
        </Box>
      </Stack>
  );
}