import { Controller, Get, Param, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { FindProjectsDto } from './dto/find-projects.dto';
import { JwtAuthGuard } from '@app/services/auth/guard/jwt.auth';

@Controller('projects')
@UseGuards(JwtAuthGuard)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get()
  async getAllProjects(@Query() query: FindProjectsDto) {
    return this.projectsService.findProjects(query);
  }

  @Get(':id')
  async getProjectById(@Param('id') id: number) {
    return this.projectsService.findOne(id);
  }
}
