import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Workout } from './db/workout.entity';
import 'dotenv/config';

export const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: [Workout],
  schema: 'public',
  migrationsRun: true,

  migrations: ['/src/db/migrations*.ts'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};
