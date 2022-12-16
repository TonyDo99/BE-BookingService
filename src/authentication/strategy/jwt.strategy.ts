import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRECT'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any): Promise<User> {
    try {
      const { email } = payload;
      const user = this.userRepository.manager.findOne(User, {
        where: {
          email,
        },
      });

      if (!user) throw new UnauthorizedException();
      return user;
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: error },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
