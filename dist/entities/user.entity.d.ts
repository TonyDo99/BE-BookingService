import { ROLE } from '../user/dto/user.dto';
import { Order } from './order.entity';
import { Ticket } from './ticket.entity';
export declare class User {
    _id: string;
    mobilePhone: string;
    email: string;
    password: string;
    fullName: string;
    role: ROLE;
    order: Order[];
    tickets: Ticket[];
}
