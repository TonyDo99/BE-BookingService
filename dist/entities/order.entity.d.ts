import { User } from './user.entity';
import { Event } from './event.entity';
import { Ticket } from './ticket.entity';
export declare enum STATUS_ORDER {
    confirmed = "confirmed",
    cancelled = "cancelled"
}
export declare class Order {
    _id: string;
    owner: User;
    event: Event;
    ticket: Ticket;
    purchase_date: Date;
    total_price: number;
    status: STATUS_ORDER;
}
