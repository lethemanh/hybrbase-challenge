import { IsString, IsEnum, IsInt, IsOptional } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus;

  @IsInt()
  projectId: number;

  @IsString()
  @IsOptional()
  assignedId: number;
}
