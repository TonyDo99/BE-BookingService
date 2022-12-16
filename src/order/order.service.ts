import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getAllOrders(): Promise<Order[]> {
    return await this.orderRepository.find({});
  }

  async createOrder(
    createOrderDto: CreateOrderDto,
    user: User,
  ): Promise<Order> {
    const order = this.orderRepository.manager.create(Order, {
      ...createOrderDto,
      owner: user,
    });
    await this.orderRepository.save(order);
    return order;
  }
}
