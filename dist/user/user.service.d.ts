import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User>;
    createOne(userDto: UserDto): Promise<import("typeorm").InsertResult>;
    getAll(): Promise<User[]>;
}
