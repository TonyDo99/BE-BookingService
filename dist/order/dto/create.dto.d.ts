import { Event } from 'src/entities/event.entity';
import { STATUS_ORDER } from 'src/entities/order.entity';
import { Ticket } from 'src/entities/ticket.entity';
export declare class CreateOrderDto {
    event: Event;
    ticket: Ticket;
    total_price: number;
    status: STATUS_ORDER;
}
