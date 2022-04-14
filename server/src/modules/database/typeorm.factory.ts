import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { ormConfigurations } from './ormconfig';
export const typeOrmConnectionOptionsFactory = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const nodeEnv = configService.get('NODE_ENV');
  const databaseUrl = configService.get('POSTGRES_HOST') as string;

  const ormConfigName = 'default';
  let ormConfig = ormConfigurations(false);
  if (nodeEnv === 'test') {
    ormConfig = ormConfigurations(true);
  }

  // const ormConfig = ormConfigurations(ormConfigName);

  if (!ormConfig) {
    throw new Error(
      `TypeORM config: "${ormConfigName}" could not be found. Please check ormconfig.ts file`,
    );
  }

  return {
    ...ormConfig,
    url: databaseUrl,
    name: nodeEnv,
  } as PostgresConnectionOptions;
};
