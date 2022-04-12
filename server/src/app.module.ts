import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkOutModule } from './workout/workout.module';
@Module({
  imports: [WorkOutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
