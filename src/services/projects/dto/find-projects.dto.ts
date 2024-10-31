import { Filter, Sort } from '@app/utils/types';
import { Type } from 'class-transformer';
import { IsOptional, IsNumber, IsString, IsArray } from 'class-validator';

export class FindProjectsDto {
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  page: number = 1;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  limit: number = 10;

  @IsString()
  @IsOptional()
  search: string;

  @IsArray()
  @IsOptional()
  sorts: Sort[];

  @IsArray()
  @IsOptional()
  filters: Filter[];
}
