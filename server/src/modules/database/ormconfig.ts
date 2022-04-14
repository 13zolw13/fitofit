import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Workout } from '../workout/workout.entity';
import 'dotenv/config';

export const ormConfigurations = (
  isTest: boolean,
): PostgresConnectionOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: isTest ? process.env.POSTGRES_TEST : process.env.POSTGRES_DB,
    synchronize: false,
    name: 'test',
    schema: 'public',
    // migrationsRun: true,
    // autoLoadEntities: true,
    entities: [isTest ? './src/**/*.entity.ts' : './dist/**/*.entity.js'], // tests run on TS directly
    migrations: ['./packages/backend/src/**/migrations/*.ts'],
    migrationsTableName: 'migrations',

    cli: {
      migrationsDir: './src/migrations',
    },
  };
};
