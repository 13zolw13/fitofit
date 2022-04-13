import { OutputWorkOutListDto, InputWorkOutDto, OutputWorkOutDto } from '../dto';
import { ServiceErrorMessage } from '../types/workout.api';
import lodash from "lodash";
import { v4 as uuidv4 } from 'uuid';
import { workOutDifficulties } from '../data/workOutDifficulties';
import { workOutTypes } from "../data/workOutTypes";
import { formatISO } from "date-fns";

export class MockWorkoutApi {
  static isResponseError(
    response: OutputWorkOutListDto | ServiceErrorMessage,
  ): response is ServiceErrorMessage {
    return (response as ServiceErrorMessage).errorMessage !== undefined;
  }

  static async getLastWeekWorkouts(): Promise<OutputWorkOutListDto> {
    return this.generateRandomWorkoutList(10);
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

  private static sortWorkoutsByDateDesc(a: OutputWorkOutDto, b: OutputWorkOutDto): number {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  }

  private static generateRandomWorkoutList(
    workoutsNumber: number,
  ): OutputWorkOutListDto {
    const workoutArray =
      [...Array(workoutsNumber)].map(() => {
        return this.generateRandomWorkout();
      });
    const sortedWorkoutArray = [...workoutArray].sort(this.sortWorkoutsByDateDesc);
    return {
      items: sortedWorkoutArray,
    };
  }

  private static generateRandomWorkout(): OutputWorkOutDto {
    return ({
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
        new Date(2022, lodash.random(0, 4), lodash.random(1, 28), 13, 54),
      ),
    });
  }
}
