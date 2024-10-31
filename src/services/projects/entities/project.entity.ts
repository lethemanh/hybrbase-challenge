import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '@app/services/users/entities/user.entity';
import { ProjectDetail } from './project-detail.entity';

export enum ProjectStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  COMPLETED = 'completed'
}

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'client_id' })
  client?: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'freelancer_id' })
  freelancer?: User;

  @Column({ default: ProjectStatus.PENDING })
  status: ProjectStatus;

  @OneToMany(() => ProjectDetail, (projectDetail) => projectDetail.project)
  details: ProjectDetail[];
}
