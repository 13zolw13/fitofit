import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { InputWorkOutDto } from 'src/dto/inputWorkOutDto';
import { QueryDto } from 'src/dto/queryDto';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkOutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get('healthcheck')
  async updateWorkout() {
    return 'server is working';
  }
  @Get()
  async getWorkouts(@Query() queryOptions: QueryDto) {
    return await this.workoutService.list(queryOptions);
  }

  @Post()
  async createWorkout(
    @Body(new ValidationPipe()) inputWorkoutDto: InputWorkOutDto,
  ) {
    return await this.workoutService.create(inputWorkoutDto);
  }
}
