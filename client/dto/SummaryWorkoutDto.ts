import { SummaryCategoryDto } from './SummaryCategoryDto';

export class SummaryWorkoutDto {
  sumWorkoutsTime: number;
  sumWorkoutsNumber: number;
  workoutDetails: SummaryCategoryDto[];
}
