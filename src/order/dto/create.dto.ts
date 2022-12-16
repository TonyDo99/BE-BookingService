import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Event } from 'src/entities/event.entity';
import { STATUS_ORDER } from 'src/entities/order.entity';
import { Ticket } from 'src/entities/ticket.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  event: Event;

  @IsNotEmpty()
  @IsString()
  ticket: Ticket;

  @IsNotEmpty()
  @IsNumber()
  total_price: number;

  @IsNotEmpty()
  @IsEnum(STATUS_ORDER, {
    message: 'status must be a enum value [confirmed, cancelled]',
  })
  status: STATUS_ORDER;
}
