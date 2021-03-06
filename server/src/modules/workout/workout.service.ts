import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from './workout.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InputWorkOutDto } from '../../dto/inputWorkOutDto';

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
    return this.workoutRepository.save({
      categoryWorkOut: workout.categoryWorkOut,
      difficulty: workout.difficulty,
      time: workout.time,
      date: workout.date,
      score: 10,
    });
  }
}
