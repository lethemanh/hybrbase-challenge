import { IsEnum, IsString } from "class-validator";

export class Sort {
  @IsString()
  column: string;

  @IsEnum(['ASC', 'DESC'])
  order: 'ASC' | 'DESC';
}

export class Filter {
  @IsString()
  column: string;

  @IsString()
  value: string;
}