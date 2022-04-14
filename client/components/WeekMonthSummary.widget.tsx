import { Grid } from '@mui/material';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { MockWorkoutApi } from 'test/MockWorkoutApi';

import { SUMMARY_LAST_7_DAYS,SUMMARY_LAST_30_DAYS } from '../queryKeys';
import { ShortSummaryWidget } from './ShortSummaryWidget';

export const WeekMonthSummaryWidget = () => {
  const lastWeekSummary = useQuery(
    SUMMARY_LAST_7_DAYS,
    MockWorkoutApi.getLastWeekWorkoutSummary,
    { retry: false, refetchOnWindowFocus: false },
  );

  const lastMonthSummary = useQuery(
    SUMMARY_LAST_30_DAYS,
    MockWorkoutApi.getLastMonthWorkoutSummary,
    { retry: false, refetchOnWindowFocus: false },
  );

  return (
    <Grid container sx={{ mt: '2rem' }} spacing={3} alignItems="stretch">
      <Grid item xs={12} sm={6}>
        <ShortSummaryWidget
          days={7}
          data={lastWeekSummary.data}
          isLoading={lastWeekSummary.isLoading}
          image={<Image src="/img/pie.svg" width="387" height="300" alt=""/>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ShortSummaryWidget
          days={30}
          data={lastMonthSummary.data}
          isLoading={lastMonthSummary.isLoading}
          image={<Image src="/img/chart.svg" width="409" height="300" alt=""/>}
        />
      </Grid>
    </Grid>
  );
};
