import { User } from 'src/entities/user.entity';
import { Ticket } from '../entities/ticket.entity';
import { CreateTicketDto } from './dto/create.dto';
import { UpdateTicketDto } from './dto/updateTicket.dto';
import { TicketService } from './ticket.service';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    getAllTickets(): Promise<Ticket[]>;
    createTicket(createTicketDto: CreateTicketDto): Promise<Ticket>;
    updateTicket(_id: string, user: User, updateTicketDto: UpdateTicketDto): Promise<{
        message: string;
        response: Ticket;
    }>;
    deleteTicket(_id: string): Promise<{
        status: boolean;
        message: string;
    }>;
}
