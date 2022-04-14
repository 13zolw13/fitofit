import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkOutController } from './workout.controller';
import { Workout } from './workout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Workout])],
  controllers: [WorkOutController],
  providers: [WorkoutService, ConfigService],
})
export class WorkOutModule {}
