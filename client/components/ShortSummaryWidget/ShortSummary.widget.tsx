import TimelineIcon from '@mui/icons-material/Timeline';
import TimerIcon from '@mui/icons-material/Timer';
import { Box, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SummaryWorkoutDto } from 'dto';

import { formatMinutesToHours } from '../../utils';
import { Loader } from '../Loader';
import { WorkoutCategoryBox } from './WorkoutCategoryBox';
import { WorkoutStatisticLine } from './WorkoutStatisticLine';

type ShortSummaryWidgetProps = {
  days: number;
  data: SummaryWorkoutDto | undefined;
  isLoading: boolean;
  image: JSX.Element;
};

const StyledCard = styled(Card)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(1),
  height: "100%"
}));

export const ShortSummaryWidget = ({
  days,
  data,
  isLoading,
  image
}: ShortSummaryWidgetProps) => {


  console.log(data);
  return (
    <>
      <StyledCard elevation={0}>
        <Typography
          variant="h4"
          component="h4"
          color="white"
          sx={{ pb: '1rem' }}
        >
          Last {days} days
        </Typography>
        {(isLoading) && <Loader />}
        {data && (
          <>
            <Stack
              sx={{ color: 'white' }}
              flexWrap="wrap"
              direction="row"
              justifyContent="space-between"
            >
              <Stack sx={{ display: 'inline-flex', marginRight: 'auto' }}>
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
                <Box sx={{width: "60%", display: "inline-block"}}>
                  {image}
                </Box>
              </Stack>
              <WorkoutCategoryBox workoutDetails={data.workoutDetails}/>
            </Stack>
          </>
        )}
      </StyledCard>
    </>
  );
};

