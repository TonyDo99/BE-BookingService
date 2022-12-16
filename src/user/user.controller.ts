import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ExcludeFieldUser } from './interceptor/user.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { FindByEmailDto } from './dto/findByEmail.dto';
import { GetUser } from 'src/util/getUser.decorator';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find')
  @UseGuards(AuthGuard())
  @UseInterceptors(new ExcludeFieldUser())
  async findByEmail(
    @Body() findByEmailDto: FindByEmailDto,
    @GetUser() user: User,
  ): Promise<UserDto> {
    try {
      const { email } = findByEmailDto;
      if (!email && user) {
        return await this.userService.findByEmail(user.email);
      } else {
        return await this.userService.findByEmail(email);
      }
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: error },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('listUsers')
  @UseGuards(AuthGuard())
  @UseInterceptors(new ExcludeFieldUser())
  async getAll() {
    try {
      return await this.userService.getAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('signup')
  async createOne(@Body() userDto: UserDto) {
    try {
      return await this.userService.createOne(userDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
