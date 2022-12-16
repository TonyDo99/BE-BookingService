import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';
import { EventService } from './event.service';
import { Event } from '../entities/event.entity';
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('allEvents')
  async getAllEvents() {
    return await this.eventService.getAllEvents();
  }

  @Get(':_id')
  async findById(@Param('_id', ParseUUIDPipe) _id: string): Promise<Event[]> {
    return await this.eventService.findEventById(_id);
  }

  @Post('createEvent')
  async createEvent(@Body() createEventDto: CreateEventDto) {
    try {
      return await this.eventService.createEvent(createEventDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch('updateEvent/:_id')
  async updateEvent(
    @Param('_id') _id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    try {
      return await this.eventService.updateEvent(updateEventDto, _id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('deleteEvent/:_id')
  async detelevent(@Param('_id') _id: string) {
    try {
      return await this.eventService.deleteEvent(_id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
