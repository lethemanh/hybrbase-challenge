import { IsString, IsEmail, IsOptional, IsEnum, IsArray } from 'class-validator';

export enum UserRole {
  FREELANCER = 'freelancer',
  CLIENT = 'client'
}

export class CreateUserDto {
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
