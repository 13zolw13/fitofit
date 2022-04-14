import { formatISO } from "date-fns";
import lodash from "lodash";

import { workOutDifficulties } from '../data/workOutDifficulties';
import { workOutTypes } from "../data/workOutTypes";
import { CategoryDto, CategoryListDto,InputWorkOutDto, OutputWorkOutDto,OutputWorkOutListDto, SummaryCategoryDto, SummaryWorkoutDto } from '../dto';
import { ServiceErrorMessage } from '../types/workout.api';

export class MockWorkoutApi {
  static isResponseError(
    response: OutputWorkOutListDto | ServiceErrorMessage,
  ): response is ServiceErrorMessage {
    return (response as ServiceErrorMessage).errorMessage !== undefined;
  }

  static async getLastWeekWorkouts(): Promise<OutputWorkOutListDto> {
    return MockWorkoutApi.generateRandomWorkoutList(10);
  }

  static async getTodayWorkouts(): Promise<OutputWorkOutListDto> {
    return MockWorkoutApi.generateTodayWorkouts();
  }

  static async getLastWeekWorkoutSummary(): Promise<SummaryWorkoutDto> {
    return MockWorkoutApi.generateSummaryWorkout(7);
  }

  static async getLastMonthWorkoutSummary(): Promise<SummaryWorkoutDto> {
    return MockWorkoutApi.generateSummaryWorkout(30);
  }

  static async getCategories(): Promise<CategoryListDto> {
    return MockWorkoutApi.generateCategories();
  }

  private static createErrorMessage(
    text: string,
    status?: number,
  ): ServiceErrorMessage {
    return {
      errorMessage: text,
      ...(status && { status: status }),
    };
  }

  private static generateCategories(): CategoryListDto {
    const categoryList = workOutTypes.map(({ categoryName, icon, id, colorLight, colorMain }) => ({
      id,
      name: categoryName,
      iconNameString: icon,
      colorMain,
      colorLight
    }));
    return {
      categories: categoryList,
    };
  }

  private static generateSummaryWorkout(days: number): SummaryWorkoutDto {
    const { categories } = MockWorkoutApi.generateCategories();
    const workoutDetails = categories.map((category) => ({
      categoryId: category.id,
      sumCategoryNumber: lodash.random(1, days),
      sumCategoryTime: lodash.random(20, 40) * days,
    }));
    const { sumNumber, sumTime } =
      MockWorkoutApi.getSumCategory(workoutDetails);
    return {
      sumWorkoutsTime: sumTime,
      sumWorkoutsNumber: sumNumber,
      workoutDetails,
    };
  }

  private static getSumCategory(workoutDetails: SummaryCategoryDto[]): {
    sumNumber: number;
    sumTime: number;
  } {
    let sumNumber = 0;
    let sumTime = 0;
    workoutDetails.forEach((workout) => {
      sumNumber += workout.sumCategoryNumber;
      sumTime += workout.sumCategoryTime;
    });
    return { sumNumber, sumTime };
  }

  private static sortWorkoutsByDateDesc(
    a: OutputWorkOutDto,
    b: OutputWorkOutDto,
  ): number {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  }

  private static generateTodayWorkouts(): OutputWorkOutListDto {
    const workouts3 = this.generateRandomWorkoutList(3);
    const noWorkout = this.generateRandomWorkoutList(0);
    return lodash.shuffle([workouts3, noWorkout])[0];
  }

  static generateRandomWorkoutList(
    workoutsNumber: number,
  ): OutputWorkOutListDto {
    const workoutArray = [...Array(workoutsNumber)].map(() => {
      return this.generateRandomWorkout();
    });
    const sortedWorkoutArray = [...workoutArray].sort(
      this.sortWorkoutsByDateDesc,
    );
    return {
      items: sortedWorkoutArray,
    };
  }

  private static generateRandomWorkout(): OutputWorkOutDto {
    return {
      id: Math.random() * 1000000,
      time: lodash.random(5, 300),
      score: 2,
      difficulty: lodash.shuffle(
        workOutDifficulties.map((difficulty) => difficulty.difficultyName),
      )[0],
      categoryWorkOut: lodash.shuffle(
        workOutTypes.map((category) => category.categoryName),
      )[0],
      date: formatISO(
        new Date(
          2022,
          lodash.random(0, 4),
          lodash.random(1, 28),
          lodash.random(0, 12),
          lodash.random(0, 59),
        ),
      ),
    };
  }
}
