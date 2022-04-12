import { Controller, Get } from '@nestjs/common';
import { WorkoutService } from './service/workout.service';

@Controller('workout')
export class WorkOutController {
  constructor(private readonly appService: WorkoutService) {}

  @Get('healthcheck')
  getHello(): string {
    return 'healthcheck';
  }
}
