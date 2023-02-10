import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'book_attribute' })
export class BookAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attribute: string;
}
