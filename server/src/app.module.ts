import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkOutModule } from './workout/workout.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Workout } from './workout/schema/workout.schema';
import { WorkoutSchema } from './workout/schema/workout.schema';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/workout'),
    WorkOutModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
