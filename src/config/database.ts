import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ConnectionDB implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST'),
      password: this.configService.get('DB_PASSWORD'),
      port: +this.configService.get('DB_PORT'),
      database: this.configService.get('DB_DATABASENAME'),
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'phatdo',
  password: '123123',
  database: 'booking-db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*.ts'],
  migrationsTableName: 'migration-table',
  synchronize: false,
});

export default AppDataSource;
