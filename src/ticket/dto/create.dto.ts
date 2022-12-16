import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Event } from 'src/entities/event.entity';

export class CreateTicketDto {
  @IsNotEmpty()
  event: Event;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
