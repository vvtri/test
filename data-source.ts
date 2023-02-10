import { types } from 'pg';
import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
require('dotenv').config();

types.setTypeParser(20, function (val) {
  return parseInt(val);
});

let config: DataSourceOptions & PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/migrations/*.js'],
  logger: 'simple-console',
  logging: true,
  migrationsTransactionMode: 'all',
  // dropSchema: true 
};

export const dataSource = new DataSource(config);
