import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Workout } from '../workout/workout.entity';
// import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfigurations = (isTest: boolean): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'workout_test',
    synchronize: false,
    // name: 'test',
    schema: 'public',
    migrationsRun: false,
    autoLoadEntities: true,
    entities: [isTest ? './src/**/*.entity.ts' : Workout], // tests run on TS directly
    migrations: ['./src/**/migrations/*.ts'],
    migrationsTableName: 'migrations',

    cli: {
      migrationsDir: isTest ? './src/migrations' : './dist/migration',
    },
  };
};
