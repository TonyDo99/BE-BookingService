import {
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsEmail,
  IsEnum,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export enum ROLE {
  normal_user = 'normal_user',
  admin_user = 'admin_user',
}

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('VN')
  mobilePhone: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(30)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password must minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:',
    },
  )
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ROLE)
  role: ROLE;
}
