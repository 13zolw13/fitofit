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
    return this.workoutService.listWorkouts();
  }

  @Post()
  async createWorkout(
    @Body(new ValidationPipe()) inputWorkoutDto: InputWorkOutDto,
  ) {
    return this.workoutService.addWorkout(inputWorkoutDto);
  }
}
