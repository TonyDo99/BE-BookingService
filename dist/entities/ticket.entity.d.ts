import { Event } from './event.entity';
import { Order } from './order.entity';
import { User } from './user.entity';
export declare class Ticket {
    _id: string;
    name: string;
    description: string;
    date: Date;
    price: number;
    quantity: number;
    event: Event;
    order: Order[];
    users: User[];
}
