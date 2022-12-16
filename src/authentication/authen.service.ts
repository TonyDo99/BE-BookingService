import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthenDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(authenDto: AuthenDto): Promise<{ accessKey: string }> {
    const { email, password } = authenDto;
    const user = await this.userService.findByEmail(email);
    if (user && (await compare(password, user.password)))
      return {
        accessKey: await this.jwtService.signAsync({ email, role: user.role }),
      };

    throw new NotFoundException(`User ${email} does not exist`);
  }
}
