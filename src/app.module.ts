import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './authentication/authen.module';
import { ConnectionDB } from './config/database';
import { EventModule } from './event/event.module';
import { OrderModule } from './order/order.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';
import { validateDatabase } from './validate/database.joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'src/.env',
      validationSchema: validateDatabase,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: ConnectionDB,
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
