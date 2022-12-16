import { Exclude } from 'class-transformer';
import { ROLE } from '../user/dto/user.dto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Order } from './order.entity';
import { Ticket } from './ticket.entity';
@Entity({ name: 'tb_user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ unique: true })
  mobilePhone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  fullName: string;

  @Column({ enum: ROLE })
  role: ROLE;

  @OneToMany(() => Order, (order) => order.owner)
  order: Order[];

  @ManyToMany(() => Ticket, (ticket) => ticket.users)
  @JoinTable({
    name: 'tb_users_tb_tickets',
  })
  tickets: Ticket[];
}
