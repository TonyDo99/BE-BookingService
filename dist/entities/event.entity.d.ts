import { Order } from './order.entity';
import { Ticket } from './ticket.entity';
export declare class Event {
    _id: string;
    slug: string;
    name: string;
    description: string;
    poster: string;
    startDate: Date;
    endDate: Date;
    published: boolean;
    ticket: Ticket[];
    order: Order[];
}
