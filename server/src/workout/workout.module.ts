import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkOutController } from './workout.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Workout, WorkoutSchema } from './schema/workout.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Workout.name, schema: WorkoutSchema }]),
    MongooseModule.forFeatureAsync([
      {
        name: Workout.name,
        useFactory: () => {
          const schema = WorkoutSchema;
          schema.pre<Workout>('save', function (next) {
            this.score = 25;
            next();
          });

          // return schema;
        },
      },
    ]),
  ],
  controllers: [WorkOutController],
  providers: [WorkoutService],
})
export class WorkOutModule {}
