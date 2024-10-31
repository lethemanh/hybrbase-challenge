import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../dto/create-user.dto';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;

  @Column("simple-array", { nullable: true })
  skills?: string[];

  @Column("simple-array", { nullable: true })
  services?: string[];
}
