import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from '../db/workout.entity';
import { InputWorkOutDto } from '../dto/inputWorkOutDto';
import { Repository } from 'typeorm/repository/Repository';
import { Between } from 'typeorm';
import { returnTodayMax, returnTodayMin } from 'utilities/returnLimDay';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>,
  ) {}

  findAll(): Promise<Workout[]> {
    return this.workoutRepository.find();
  }
  addWorkout(workout: InputWorkOutDto): Promise<Workout> {
    const score =
      10 *
      (workout.difficulty.length + workout.categoryWorkOut.length) *
      workout.time;
    return this.workoutRepository.save({
      categoryWorkOut: workout.categoryWorkOut,
      difficulty: workout.difficulty,
      time: workout.time,
      date: workout.date,
      score: score,
    });
  }

  findTodayWorkouts(): Promise<Workout[]> {
    const convertDateToISoMin = returnTodayMin();
    const convertDateToISoMax = returnTodayMax();
    console.log(convertDateToISoMax);
    return this.workoutRepository.find({
      date: Between(convertDateToISoMin, convertDateToISoMax),
    });
  }
}
