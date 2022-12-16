import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create.dto';
import { User } from '../entities/user.entity';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    getAllOrders(): Promise<Order[]>;
    createOrder(createOrderDto: CreateOrderDto, user: User): Promise<Order>;
}
