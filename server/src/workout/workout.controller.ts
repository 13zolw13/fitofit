import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { InputWorkOutDto } from '../dto/inputWorkOutDto';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkOutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get()
  async getWorkouts() {
    try {
      return this.workoutService.findAll();
    } catch (error: any) {
      return { text: 'Something went wrong', status: error.status };
    }
  }

  @Get('/today')
  async getTodayWorkouts() {
    try {
      return await this.workoutService.findTodayWorkouts();
    } catch (error: any) {
      return { text: 'Something went wrong', status: error.status };
    }
  }

  @Post()
  async addWorkout(@Body(new ValidationPipe()) workout: InputWorkOutDto) {
    try {
      return this.workoutService.addWorkout({
        categoryWorkOut: workout.categoryWorkOut,
        difficulty: workout.difficulty,
        time: workout.time,
        date: workout.date,
        score: 10,
      });
    } catch (error) {
      return { text: 'Something went wrong', status: error.status };
    }
  }
}
