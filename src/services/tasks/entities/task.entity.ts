import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from '@app/services/projects/entities/project.entity';
import { User } from '@app/services/users/entities/user.entity';

export enum TaskStatus {
  TODO = 'to do',
  IN_PROGRESS = 'in progress',
  COMPLETED = 'completed',
}

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.id)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: TaskStatus.TODO })
  status: TaskStatus;

  @Column({ nullable: true })
  assignedToId: number;

  @ManyToOne(() => User, { nullable: true })
  assignedTo?: User;
}
