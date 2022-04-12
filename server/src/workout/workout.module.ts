import { Module } from '@nestjs/common';
import { WorkoutService } from './service/workout.service';
import { WorkOutController } from './workout.controller';

@Module({
  controllers: [WorkOutController],
  providers: [WorkoutService],
})
export class WorkOutModule {}
