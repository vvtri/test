import { Injectable } from '@nestjs/common';
import { BookRepository } from './repositories/book.repository';
import { BookAttributeRepository } from './repositories/book-attribute.repository';
import { Transactional, runOnTransactionCommit } from 'typeorm-transactional';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    private bookRepo: BookRepository,
    private bookAttributeRepo: BookAttributeRepository,
    private dataSource: DataSource,
  ) {}

  @Transactional()
  async getHello() {
    // const book = this.bookRepo.create({ name: 'test' });
    // await this.bookRepo.insert(book);

    // await this.bookRepo.find({ lock: { mode: 'pessimistic_write' } });
    // await this.bookRepo.find({});


    runOnTransactionCommit(() => {
      console.log('is this work 2');
      throw new Error('unknow');
    });

    // throw new Error('unknow');

  }
}
