import { Injectable } from '@nestjs/common';
export class Workout {
  workoutId?: number;
  categoryWorkOut: string;
  difficulty: string;
  time: number;
  score?: number;
  date: string;
  constructor(
    CategoryWorkOut: string,
    difficulty: string,
    time: number,
    date: string,
  ) {
    this.workoutId = Math.floor(Math.random() * 1000000);
    this.categoryWorkOut = CategoryWorkOut;
    this.difficulty = difficulty;
    this.time = time;
    this.date = date;
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
      workout.date,
    );
    this.workOuts.push(newWorkout);
    return this.workOuts;
  }
  listWorkouts() {
    return this.workOuts;
  }
}
