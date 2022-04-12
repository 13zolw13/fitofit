import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { InputWorkOutDto } from 'src/dto/inputWorkOutDto';
import { Workout, WorkoutDocument } from './schema/workout.schema';
// export class Workout {
//   workoutId?: number;
//   categoryWorkOut: string;
//   difficulty: string;
//   time: number;
//   score?: number;
//   date: string;
//   constructor(
//     CategoryWorkOut: string,
//     difficulty: string,
//     time: number,
//     date: string,
//   ) {
//     this.workoutId = Math.floor(Math.random() * 1000000);
//     this.categoryWorkOut = CategoryWorkOut;
//     this.difficulty = difficulty;
//     this.time = time;
//     this.date = date;
//     this.score = 0;
//   }
// }

@Injectable()
export class WorkoutService {
  // workOuts: Workout[] = [];
  constructor(
    @InjectModel(Workout.name) private Workout: Model<WorkoutDocument>,
  ) {}

  async create(workout: InputWorkOutDto): Promise<Workout> {
    const newWorkout = await this.Workout.create(workout);
    await newWorkout.save();
    return newWorkout;
  }
  async list(): Promise<Workout[]> {
    return await this.Workout.find({}).exec();
  }
}
