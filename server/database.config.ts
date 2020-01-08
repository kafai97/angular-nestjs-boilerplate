import { Photo } from './photo/photo.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number.parseInt(process.env.DATABASE_PORT, 10) || 3306,
  database: process.env.DATABASE_NAME || 'cc_database',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  entities: [Photo],
  synchronize: true,
};
