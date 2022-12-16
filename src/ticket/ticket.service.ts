import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from '../entities/ticket.entity';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async getAllTickets(): Promise<Ticket[]> {
    return await this.ticketRepository.find({});
  }

  async findTicketById(_id: string): Promise<Ticket> {
    return await this.ticketRepository.findOneBy({ _id });
  }

  async createTicket(createTicketDto: CreateTicketDto) {
    const createdTicket = this.ticketRepository.manager.create(Ticket, {
      ...createTicketDto,
    });
    return await this.ticketRepository.save(createdTicket);
  }

  async deleteTicket(
    _id: string,
  ): Promise<{ status: boolean; message: string }> {
    const { affected } = await this.ticketRepository.delete(_id);
    if (affected)
      return {
        status: true,
        message: 'Ticket successfully deleted !',
      };
    else
      return {
        status: true,
        message: 'Ticket failed deleted !',
      };
  }

  async buyTicket(_id: string, user: User, numberTicket: number) {
    // Decrement quantity ticket
    await this.ticketRepository
      .createQueryBuilder()
      .update(Ticket)
      .set({
        quantity: () => `quantity - ${numberTicket}`,
      })
      .where('_id = :_id', { _id })
      .execute();
    const ticket = await this.ticketRepository.findOneBy({ _id });
    ticket.users = [user];
    return await this.ticketRepository.save(ticket);
  }
}
