import { Stack } from '@mui/material';
import { Loader } from 'components/Loader';
import { data } from 'cypress/types/jquery';
import { CATEGORIES_QUERY } from 'queryKeys';
import { useQuery } from 'react-query';
import { MockWorkoutApi } from 'test/MockWorkoutApi';

import { SummaryCategoryDto } from '../../dto/SummaryCategoryDto';
import { WorkoutCategoryLine } from './WorkoutCategoryLine';

type WorkoutCategoryBox = {
  workoutDetails: SummaryCategoryDto[];
};

export const WorkoutCategoryBox = ({ workoutDetails }: WorkoutCategoryBox) => {
  const categoriesList = useQuery(
    CATEGORIES_QUERY,
    MockWorkoutApi.getCategories,
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );
  return (
    <>
      {categoriesList.isLoading && <Loader />}
      {categoriesList.data && categoriesList && categoriesList.data && (
        <Stack sx={{ display: 'inline-flex', marginLeft: 'auto' }}>
          {workoutDetails.map((workoutDetail) => {
            if (workoutDetail.sumCategoryNumber === 0) return null;
            let categoryData = categoriesList.data.categories.find(
              (category) => category.id === workoutDetail.categoryId,
            );
            if (categoryData === undefined) {
              categoryData = {
                id: 'not defined',
                name: 'not defined',
                iconNameString: 'help_outline',
                colorMain: 'darkgrey',
                colorLight: 'lightgrey',
              };
            }
            return (
              <WorkoutCategoryLine
                key={categoryData.id}
                workoutsNumber={workoutDetail.sumCategoryNumber}
                iconName={categoryData.iconNameString}
                categoryName={categoryData.name}
              />
            );
          })}
        </Stack>
      )}
    </>
  );
};
