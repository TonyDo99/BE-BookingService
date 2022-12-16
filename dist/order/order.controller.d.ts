import { OrderService } from './order.service';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';
import { CreateOrderDto } from './dto/create.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAllOrders(): Promise<Order[]>;
    createOrder(user: User, createOrderDto: CreateOrderDto): Promise<Order>;
}
