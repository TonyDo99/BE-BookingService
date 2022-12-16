import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/authentication/authen.module';
// import { HistoryBuyTicket } from '../entities/historyBuyTicket.entity';
import { Ticket } from '../entities/ticket.entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), AuthModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
