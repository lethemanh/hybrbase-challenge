import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(task: CreateTaskDto): Promise<Task> {
    const taskEntity = new Task();
    taskEntity.title = task.title;
    taskEntity.description = task.description;
    taskEntity.project.id = task.projectId;
    taskEntity.assignedTo.id = task.assignedId;

    return this.taskRepository.save(taskEntity);
  }

  async findByProject(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
