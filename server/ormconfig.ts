export default {
  type: 'postgres',
  schema: 'public',
  url: 'postgres://postgres:postgres@127.0.0.1:5432/workout_test',
  entities: ['src/**/*.entity{ .ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
