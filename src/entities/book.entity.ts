import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'book' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
