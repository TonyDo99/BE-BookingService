import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { FindByEmailDto } from './dto/findByEmail.dto';
import { User } from 'src/entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findByEmail(findByEmailDto: FindByEmailDto, user: User): Promise<UserDto>;
    getAll(): Promise<User[]>;
    createOne(userDto: UserDto): Promise<import("typeorm").InsertResult>;
}
