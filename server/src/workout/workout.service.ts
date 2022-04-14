import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from '../db/workout.entity';
import { InputWorkOutDto } from '../dto/inputWorkOutDto';
import { Repository } from 'typeorm/repository/Repository';
import { Between, MoreThanOrEqual } from 'typeorm';
import {
  returnDate,
  returnTodayMax,
  returnTodayMin,
} from 'utilities/returnLimDay';
import { OutputWorkOutListDto } from 'src/dto/OutputWorkOutListDto';
import { returnMapping } from '../../utilities/returnMapping';

@Injectable()
export class WorkoutService {
  async findLastWorkouts(Query: string) {
    const date = returnDate(Query);
    const data = await this.workoutRepository.find({
      date: MoreThanOrEqual(date),
    });
    return returnMapping(data);
  }
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

  async findTodayWorkouts(): Promise<OutputWorkOutListDto> {
    const convertDateToISoMin = returnTodayMin();
    const convertDateToISoMax = returnTodayMax();

    const data = await this.workoutRepository.find({
      date: Between(convertDateToISoMin, convertDateToISoMax),
    });
    return returnMapping(data);
  }
}
