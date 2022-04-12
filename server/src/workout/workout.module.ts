import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkOutController } from './workout.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Workout, WorkoutSchema } from './schema/workout.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Workout.name, schema: WorkoutSchema }]),
  ],
  controllers: [WorkOutController],
  providers: [WorkoutService],
})
export class WorkOutModule {}
