import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { InputWorkOutDto } from '../dto/inputWorkOutDto';
import { WorkoutService } from './workout.service';
@ApiTags('workout')
@Controller('workout')
export class WorkOutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @ApiOperation({ summary: 'Get all workouts' })
  @ApiResponse({ status: 200, description: 'List of all workouts' })
  @Get()
  async getWorkouts() {
    try {
      return this.workoutService.findAll();
    } catch (error: any) {
      return { text: 'Something went wrong', status: error.status };
    }
  }
  @ApiOperation({ summary: 'Get todays workout' })
  @ApiResponse({ status: 200, description: 'List of workout from today' })
  @Get('/today')
  async getTodayWorkouts() {
    try {
      return await this.workoutService.findTodayWorkouts();
    } catch (error: any) {
      return { text: 'Something went wrong', status: error.status };
    }
  }

  @ApiOperation({ summary: 'Add new workout' })
  @ApiResponse({ status: 201, description: 'Successfully added workout' })
  @ApiBody({ type: InputWorkOutDto })
  @Post()
  async addWorkout(@Body(new ValidationPipe()) workout: InputWorkOutDto) {
    try {
      return this.workoutService.addWorkout(workout);
    } catch (error) {
      return { text: 'Something went wrong', status: error.status };
    }
  }
}
