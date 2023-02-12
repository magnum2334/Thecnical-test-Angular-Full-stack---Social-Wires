/* eslint-disable prettier/prettier */
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tilte: string;

  @Column()
  content: string;

  @Column('datetime', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)' })
  createdAt: string;

  @ManyToOne(type => User, user => user.publications)
  user: User;
}

