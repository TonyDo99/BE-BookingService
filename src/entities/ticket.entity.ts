import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Event } from './event.entity';
import { Order } from './order.entity';
import { User } from './user.entity';

@Entity({ name: 'tb_ticket' })
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Event, (event) => event.ticket)
  event: Event;

  @OneToMany(() => Order, (order) => order.ticket)
  order: Order[];

  @ManyToMany(() => User, (user) => user.tickets)
  users: User[];
}
