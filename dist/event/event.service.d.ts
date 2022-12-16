import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: Repository<Event>);
    getAllEvents(): Promise<Event[]>;
    findEventById(_id: string): Promise<Event[]>;
    createEvent(createEventDto: CreateEventDto): Promise<import("typeorm").InsertResult>;
    updateEvent(updateEventDto: UpdateEventDto, _id: string): Promise<{
        status: boolean;
        message: string;
    }>;
    deleteEvent(_id: string): Promise<{
        status: boolean;
        message: string;
    }>;
}
