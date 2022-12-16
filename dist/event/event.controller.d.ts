import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';
import { EventService } from './event.service';
import { Event } from '../entities/event.entity';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    getAllEvents(): Promise<Event[]>;
    findById(_id: string): Promise<Event[]>;
    createEvent(createEventDto: CreateEventDto): Promise<import("typeorm").InsertResult>;
    updateEvent(_id: string, updateEventDto: UpdateEventDto): Promise<{
        status: boolean;
        message: string;
    }>;
    detelevent(_id: string): Promise<{
        status: boolean;
        message: string;
    }>;
}
