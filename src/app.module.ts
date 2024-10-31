import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@app/services/auth/auth.module';
import configuration from './config/configuration';
import { UsersModule } from '@app/services/users/users.module';
import { ProjectsModule } from '@app/services/projects/projects.module';
import { TasksModule } from '@app/services/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './services/projects/entities/project.entity';
import { ProjectDetail } from './services/projects/entities/project-detail.entity';
import { Task } from './services/tasks/entities/task.entity';
import { User } from './services/users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...configuration.database,
      entities: [Project, ProjectDetail, Task, User]
    }),
    ProjectsModule,
    TasksModule,
    UsersModule,
    AuthModule,
  ]
})
export class AppModule {}
