import { Injectable } from '@nestjs/common';
import { workOutTypes } from 'src/constant/workOutTypes';
import { workOutDifficulties } from 'src/constant/workOutDifficulties';

export class Workout {
  workoutId?: number;
  categoryWorkOut: workOutTypes;
  difficulty: workOutDifficulties;
  time: number;
  score?: number;

  constructor(
    CategoryWorkOut: workOutTypes,
    difficulty: workOutDifficulties,
    time: number,
  ) {
    this.workoutId = Math.floor(Math.random() * 1000000);
    this.categoryWorkOut = CategoryWorkOut;
    this.difficulty = difficulty;
    this.time = time;

    this.score = 0;
  }
}

@Injectable()
export class WorkoutService {
  workOuts: Workout[] = [];

  addWorkout(workout: Workout) {
    const newWorkout = new Workout(
      workout.categoryWorkOut,
      workout.difficulty,
      workout.time,
    );
    this.workOuts.push(newWorkout);
    return this.workOuts;
  }
  listWorkouts() {
    return this.workOuts;
  }
}
