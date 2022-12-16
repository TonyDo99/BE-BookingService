import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { Ticket } from './ticket.entity';

@Entity({ name: 'tb_event' })
export class Event {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  slug: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  poster: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'boolean' })
  published: boolean;

  @OneToMany(() => Ticket, (ticket) => ticket.event)
  ticket: Ticket[];

  @OneToMany(() => Order, (order) => order.event)
  order: Order[];
}
