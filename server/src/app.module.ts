import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutService } from './workout/service/workout/workout.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WorkoutService],
})
export class AppModule {}
