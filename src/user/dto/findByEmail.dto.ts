import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindByEmailDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;
}
