import { WeekMonthSummaryWidget } from 'components';
import { TodaySummaryWidget } from 'components/TodaySummaryWidget';
import type { NextPage } from 'next';
import * as React from 'react';


const Dashboard: NextPage = () => {
  return (
    <>
      <TodaySummaryWidget />
      <WeekMonthSummaryWidget />
    </>
  );
};

export default Dashboard;
