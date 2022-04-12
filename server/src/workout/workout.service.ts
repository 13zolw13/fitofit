import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { InputWorkOutDto } from 'src/dto/inputWorkOutDto';
import { QueryDto } from 'src/dto/queryDto';
import { Workout, WorkoutDocument } from './schema/workout.schema';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectModel(Workout.name) private Workout: Model<WorkoutDocument>,
  ) {}

  score(time: number, difficulty: string) {
    switch (difficulty) {
      case 'easy':
        return 10 * time;
      case 'hard':
        return 50 * time;
      default:
        return time;
    }
  }
  async create(workout: InputWorkOutDto): Promise<Workout> {
    const newWorkout = await this.Workout.create({
      date: workout.date,
      time: workout.time,
      difficulty: workout.difficulty,
      categoryWorkOut: workout.categoryWorkOut,
      score: this.score(workout.time, workout.difficulty),
    });
    await newWorkout.save();
    return newWorkout;
  }
  async list(queryOptions?: QueryDto): Promise<Workout[]> {
    if (queryOptions) {
      const { categoryWorkOut, difficulty, date, timeSplit, sort } =
        queryOptions;
      const query = {};
      if (categoryWorkOut) {
        query['categoryWorkOut'] = categoryWorkOut;
      }
      if (difficulty) {
        query['difficulty'] = difficulty;
      }
      if (date) {
        query['date'] = date;
      }
      if (timeSplit === 'week') {
        query['date'] = { $gte: new Date(new Date().getTime() - 604800000) };
      }
      if (timeSplit === 'today') {
        query['date'] = { $gte: new Date(new Date().getTime() - 86400000) };
      }
      if (sort === 'asc') {
        return await this.Workout.find(query).sort({ date: 1 });
      }

      return await this.Workout.find(query).sort({ date: -1 });
    }
    return await this.Workout.find({}).sort({ date: -1 }).exec();
  }
}
