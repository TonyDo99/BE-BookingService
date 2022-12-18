import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { Event } from '../entities/event.entity';
import { AuthModule } from 'src/authentication/authen.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), AuthModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
