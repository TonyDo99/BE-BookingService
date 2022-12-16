import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';
import { GetUser } from 'src/util/getUser.decorator';
import { Ticket } from '../entities/ticket.entity';
import { CreateTicketDto } from './dto/create.dto';
import { UpdateTicketDto } from './dto/updateTicket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
@UseGuards(AuthGuard())
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('allTickets')
  async getAllTickets(): Promise<Ticket[]> {
    return await this.ticketService.getAllTickets();
  }

  @Post('createTicket')
  async createTicket(
    @Body() createTicketDto: CreateTicketDto,
  ): Promise<Ticket> {
    try {
      return await this.ticketService.createTicket(createTicketDto);
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

  @Patch('updateTicket/:_id')
  async updateTicket(
    @Param('_id') _id: string,
    @GetUser() user: User,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    try {
      const { quantity, name, description, price } = updateTicketDto;
      if (quantity && (!name || !description || !price))
        return {
          message: 'Ticket was updated quantity !',
          response: await this.ticketService.buyTicket(_id, user, quantity),
        };
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

  @Delete('deleteTicket/:_id')
  async deleteTicket(
    @Param('_id') _id: string,
  ): Promise<{ status: boolean; message: string }> {
    try {
      return await this.ticketService.deleteTicket(_id);
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
