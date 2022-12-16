import { Ticket } from '../entities/ticket.entity';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create.dto';
export declare class TicketService {
    private readonly ticketRepository;
    constructor(ticketRepository: Repository<Ticket>);
    getAllTickets(): Promise<Ticket[]>;
    findTicketById(_id: string): Promise<Ticket>;
    createTicket(createTicketDto: CreateTicketDto): Promise<Ticket>;
    deleteTicket(_id: string): Promise<{
        status: boolean;
        message: string;
    }>;
    buyTicket(_id: string, user: User, numberTicket: number): Promise<Ticket>;
}
