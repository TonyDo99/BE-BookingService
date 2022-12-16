import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async getAllEvents() {
    return await this.eventRepository.find({
      relations: {
        ticket: true,
      },
    });
  }

  async findEventById(_id: string): Promise<Event[]> {
    return await this.eventRepository.find({
      where: {
        _id,
      },
      relations: {
        ticket: true,
      },
    });
  }

  async createEvent(createEventDto: CreateEventDto) {
    const inserted = await this.eventRepository.insert(createEventDto);
    return inserted;
  }

  async updateEvent(updateEventDto: UpdateEventDto, _id: string) {
    const { affected } = await this.eventRepository
      .createQueryBuilder()
      .update(Event)
      .set({ ...updateEventDto })
      .where('_id = :_id', { _id })
      .execute();
    if (affected)
      return {
        status: true,
        message: 'Event updated successfully',
      };
    else
      return {
        status: false,
        message: 'Event updated failed',
      };
  }

  async deleteEvent(_id: string) {
    const { affected } = await this.eventRepository.delete(_id);
    if (affected)
      return {
        status: true,
        message: 'Delete deleted',
      };
    else
      return {
        status: false,
        message: 'Delete event failed',
      };
  }
}
