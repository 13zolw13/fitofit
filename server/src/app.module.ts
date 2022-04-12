import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutService } from './workout/service/workout.service';
import { WorkOutController } from './workout/workout.controller';
import { WorkOutModule } from './workout/workout.module';

@Module({
  imports: [WorkOutModule],
  controllers: [AppController, WorkOutController],
  providers: [AppService, WorkoutService],
})
export class AppModule {}
