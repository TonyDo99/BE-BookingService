import { Ticket } from './ticket.entity';
import { User } from './user.entity';
export declare class HistoryBuyTicket {
    user: User;
    ticket: Ticket;
    bought: number;
    createAt: Date;
}
