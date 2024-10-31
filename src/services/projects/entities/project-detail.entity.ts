import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Project } from './project.entity';

@Entity({ name: 'project-details' })
export class ProjectDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.details)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'date' })
  deadline: Date;

  @Column({ type: 'text', nullable: true })
  deliverable: string;
}
