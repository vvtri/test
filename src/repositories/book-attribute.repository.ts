import { Injectable } from '@nestjs/common';
import { BookAttribute } from 'src/entities/book-attribute.entity';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repositories';

@Injectable()
export class BookAttributeRepository extends BaseRepository<BookAttribute> {
  constructor(dataSource: DataSource) {
    super(BookAttribute, dataSource);
  }
}
