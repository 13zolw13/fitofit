import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Workout } from './db/workout.entity';
import 'dotenv/config';

export const ormConfig = (isTest: boolean): PostgresConnectionOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    // entities: ['src/**/*.entity.ts'],
    entities: [Workout],
    synchronize: true,
  };
};
