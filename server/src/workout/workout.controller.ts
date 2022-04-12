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

  @Get('healthcheck')
  async updateWorkout() {
    return 'server is working';
  }
  @Get()
  async getWorkouts() {
    return await this.workoutService.list();
  }

  @Post()
  async createWorkout(
    @Body(new ValidationPipe()) inputWorkoutDto: InputWorkOutDto,
  ) {
    return await this.workoutService.create(inputWorkoutDto);
  }
}
