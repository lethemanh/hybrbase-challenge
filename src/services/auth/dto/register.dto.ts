import { UserRole } from '@app/services/users/dto/create-user.dto';
import { IsString, IsEmail, IsOptional, IsEnum, IsArray } from 'class-validator';

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @IsArray()
  @IsOptional()
  skills?: string[];
}
