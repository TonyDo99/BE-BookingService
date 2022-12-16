import { Event } from 'src/entities/event.entity';
export declare class CreateTicketDto {
    event: Event;
    name: string;
    date: Date;
    description: string;
    price: number;
    quantity: number;
}
