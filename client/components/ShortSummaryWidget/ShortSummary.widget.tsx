import { Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SummaryWorkoutDto } from 'dto';

import { Loader } from '../Loader';
import { WorkoutCategoryBox } from './WorkoutCategoryBox';
import { WorkoutStatisticBox } from './WorkoutStatisticBox';

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
  height: '100%',
}));

export const ShortSummaryWidget = ({
  days,
  data,
  isLoading,
  image,
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
        {isLoading && <Loader />}
        {data && (
          <Stack
            sx={{
              color: 'white',
            }}
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
          >
            <WorkoutStatisticBox data={data} image={image}/>
            <WorkoutCategoryBox workoutDetails={data.workoutDetails}/>

          </Stack>
        )}
      </StyledCard>
    </>
  );
};
