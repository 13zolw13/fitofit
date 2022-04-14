import { Stack, Typography } from "@mui/material";

type WorkoutStatisticLineProps = {
  materialIconComponent: JSX.Element;
  numberString: string;
  description: string;
  isNumberBigger?: boolean;
};

export const WorkoutStatisticLine = ({
  materialIconComponent,
  numberString,
  description,
  isNumberBigger,
}: WorkoutStatisticLineProps) => (
  <Stack direction="row" alignItems="center" sx={{ pb: '0.5rem' }}>
    <Stack sx={{ minWidth: '2rem' }} alignItems="center">
      {materialIconComponent}
    </Stack>
    <Stack
      sx={{ minWidth: '4rem', paddingRight: '0.5rem' }}
      direction="row"
      justifyContent="flex-end"
    >
      <Typography
        fontWeight={500}
        fontSize={isNumberBigger ? '1.5rem' : '1rem'}
      >
        {numberString}
      </Typography>
    </Stack>
    <Typography variant="body1" fontWeight={300}>
      {description}
    </Typography>
  </Stack>
);
