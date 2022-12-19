import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './authentication/authen.module';
import {
  TypeOrmConfigServicesDevelop,
  TypeOrmConfigServicesProd,
} from './config/database';
import { EventModule } from './event/event.module';
import { OrderModule } from './order/order.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';
import { validateDevDB, validateProdDB } from './validate/database.joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.stage.${process.env.NODE_ENV || 'dev'}`,
      validationSchema:
        process.env.NODE_ENV === 'dev' ? validateDevDB : validateProdDB,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass:
        process.env.NODE_ENV === 'dev'
          ? TypeOrmConfigServicesDevelop
          : TypeOrmConfigServicesProd,
    }),
    AuthModule,
    UserModule,
    EventModule,
    TicketModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
