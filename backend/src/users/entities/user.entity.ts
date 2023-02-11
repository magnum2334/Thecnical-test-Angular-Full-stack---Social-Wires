/* eslint-disable prettier/prettier */
import { Publication } from 'src/publications/entities/publication.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  fullName: string;

  @Column()
  password: string;
  
  @OneToMany(() => Publication, publication => publication.user)
  publications: Publication[];
}