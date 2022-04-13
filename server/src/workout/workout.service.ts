import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from 'src/db/workout.entity';
import { InputWorkOutDto } from 'src/dto/inputWorkOutDto';
import { Repository } from 'typeorm/repository/Repository';

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
    return this.workoutRepository.save(workout);
  }
}
