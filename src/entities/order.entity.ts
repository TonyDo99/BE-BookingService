import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Event } from './event.entity';
import { Ticket } from './ticket.entity';

export enum STATUS_ORDER {
  confirmed = 'confirmed',
  cancelled = 'cancelled',
}

@Entity({ name: 'tb_order' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @ManyToOne(() => User, (user) => user.order)
  owner: User;

  @ManyToOne(() => Event, (event) => event.order)
  event: Event;

  @ManyToOne(() => Ticket, (ticket) => ticket.order)
  ticket: Ticket;

  @Column({ type: 'date', default: new Date() })
  purchase_date: Date;

  @Column()
  total_price: number;

  @Column({
    enum: STATUS_ORDER,
    default: STATUS_ORDER.confirmed,
  })
  status: STATUS_ORDER;
}
