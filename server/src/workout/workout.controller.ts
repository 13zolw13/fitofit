import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { InputWorkOutDto } from 'src/dto/inputWorkOutDto';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkOutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get()
  async getWorkouts() {
    return this.workoutService.findAll();
  }

  @Post()
  async addWorkout(@Body(new ValidationPipe()) workout: InputWorkOutDto) {
    return this.workoutService.addWorkout({
      categoryWorkOut: workout.categoryWorkOut,
      difficulty: workout.difficulty,
      time: workout.time,
      date: workout.date,
      score: 10,
    });
  }
  // @Post()
  // async createWorkout(
  //   @Body(new ValidationPipe()) inputWorkoutDto: InputWorkOutDto,
  // ) {
  //   return this.workoutService.addWorkout(inputWorkoutDto);
  // }
}
