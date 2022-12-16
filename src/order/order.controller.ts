import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '../entities/order.entity';
import { GetUser } from '../util/getUser.decorator';
import { User } from '../entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrderDto } from './dto/create.dto';

@Controller('order')
@UseGuards(AuthGuard())
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('listOrders')
  async getAllOrders(): Promise<Order[]> {
    return await this.orderService.getAllOrders();
  }

  @Post('createOrder')
  async createOrder(
    @GetUser() user: User,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    try {
      return await this.orderService.createOrder(createOrderDto, user);
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
