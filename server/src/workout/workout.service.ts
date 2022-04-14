import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from '../db/workout.entity';
import { InputWorkOutDto } from '../dto/inputWorkOutDto';
import { Repository } from 'typeorm/repository/Repository';
import {
  Between,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
} from 'typeorm';

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

    function returnTodayMin() {
      const today = new Date().setDate(new Date().getDate());
      const convertDate = new Date(today).toISOString().slice(0, 10);
      const convertDateToISo = new Date(convertDate).toISOString();
      return convertDateToISo;
    }

    function returnTodayMax() {
      const today = new Date().setDate(new Date().getDate() + 1);
      const convertDate = new Date(today).toISOString().slice(0, 10);
      const convertDateToISo = new Date(convertDate).toISOString();
      return convertDateToISo;
    }
  }
}
