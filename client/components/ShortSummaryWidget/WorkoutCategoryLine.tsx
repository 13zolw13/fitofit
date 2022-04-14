import { Icon, Stack, Typography } from '@mui/material';

type WorkoutCategoryLineProps = {
  iconName: string;
  categoryName: string;
  workoutsNumber: number;
};

export const WorkoutCategoryLine = ({
  iconName,
  categoryName,
  workoutsNumber,
}: WorkoutCategoryLineProps) => {
  return (
    <Stack direction="row" color="common.white" sx={{marginBottom: '0.4rem'}}>
      <Icon sx={{ flexShrink: 0, flexGrow: 0, marginRight: '0.25rem' }}>
        {iconName}
      </Icon>{' '}
      <Typography variant="body1" sx={{ paddingRight: '0.4rem', flexShrink: 0 }}>
        {categoryName}
      </Typography>
      <Typography variant="body1" sx={{ marginLeft: 'auto', fontWeight: 400 }}>
        {workoutsNumber}
      </Typography>
    </Stack>
  );
};
