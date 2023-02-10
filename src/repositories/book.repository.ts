import { Injectable } from '@nestjs/common';
import { Book } from 'src/entities/book.entity';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repositories';

@Injectable()
export class BookRepository extends BaseRepository<Book> {
  constructor(dataSource: DataSource) {
    super(Book, dataSource);
  }
}
