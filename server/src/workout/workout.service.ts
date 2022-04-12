import { Injectable } from '@nestjs/common';
import { workOutTypes } from 'src/constant/workOutTypes';
import { workOutDifficulties } from 'src/constant/workOutDifficulties';

export class Workout {
  workoutId?: number;
  name: string;

  difficulty: workOutDifficulties;

  time: number;

  type: workOutTypes;
  score?: number;

  constructor(
    name: string,
    difficulty: workOutDifficulties,
    time: number,
    type: workOutTypes,
  ) {
    this.workoutId = Math.floor(Math.random() * 1000000);
    this.name = name;
    this.difficulty = difficulty;
    this.time = time;
    this.type = type;
    this.score = 0;
  }
}

@Injectable()
export class WorkoutService {
  workOuts: Workout[] = [];

  addWorkout(workout: Workout) {
    const newWorkout = new Workout(
      workout.name,
      workout.difficulty,
      workout.time,
      workout.type,
    );
    this.workOuts.push(newWorkout);
    return this.workOuts;
  }
  listWorkouts() {
    return this.workOuts;
  }
}
