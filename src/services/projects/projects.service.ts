import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsOrder, FindOptionsWhere, Like, Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { FindProjectsDto } from './dto/find-projects.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async findProjects(query: FindProjectsDto): Promise<{ data: Project[]; total: number }> {
    console.log('query: ', query)
    const { page, limit, search, sorts, filters } = query;
    
    const skip = (page - 1) * limit;
    console.log('skip: ', skip)

    const where: FindOptionsWhere<Project> = {
      ...filters?.reduce((acc, { column, value }) => {
        acc[column] = value;
        return acc;
      }, {} as FindOptionsWhere<Project>),
      ...(search && { name: Like(`%${search}%`) }),
    };

    const order: FindOptionsOrder<Project> = sorts?.reduce((acc, { column, order }) => {
      acc[column] = order;
      return acc;
    }, {} as FindOptionsOrder<Project>);

    const [projects, total] = await this.projectRepository.findAndCount({
      where,
      order,
      skip,
      take: limit,
    });

    return { data: projects, total };
  }

  async findOne(id: number): Promise<Project | undefined> {
    return this.projectRepository.findOne({ where: { id } });
  }
}
