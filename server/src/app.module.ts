import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from './ormconfig';
import { WorkOutModule } from './workout/workout.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const env = configService.get<string>('NODE_ENV');
        console.log(env);
        return ormConfig(env === 'test');
      },
    }),
    WorkOutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
