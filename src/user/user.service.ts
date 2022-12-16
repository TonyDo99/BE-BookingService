import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { hash, genSalt } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    const user = await this.userRepository.findOneBy({
      email,
    });
    if (!user) throw new NotFoundException(`User ${email} does not exist`);
    else return user;
  }

  async createOne(userDto: UserDto) {
    const hashPass = await hash(userDto.password, await genSalt(10));
    const result = await this.userRepository.insert({
      ...userDto,
      password: hashPass,
    });

    return result;
  }

  async getAll() {
    const list_user = await this.userRepository.find({});
    return list_user;
  }
}
