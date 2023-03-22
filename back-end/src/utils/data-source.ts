import { DataSource } from 'typeorm';
import { Message } from '../entities/Message.entity.js';

// I did not use environment variables because this code's purpose is to be shown as a demo
export const AppDataSource = new DataSource({
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'P0o9i8u7',
  database: 'messages',
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [Message],
});
