import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './authen.service';
import { AuthenDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authenDto: AuthenDto) {
    try {
      return await this.authService.login(authenDto);
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
