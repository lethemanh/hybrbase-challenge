import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectDetail } from './entities/project-detail.entity';
import { Project } from './entities/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectDetail])],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
