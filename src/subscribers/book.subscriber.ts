import { BookAttribute } from 'src/entities/book-attribute.entity';
import { Book } from 'src/entities/book.entity';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  TransactionCommitEvent,
} from 'typeorm';

@EventSubscriber()
export class BookSubscriber implements EntitySubscriberInterface<Book> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo(): string | Function {
    return Book;
  }

  // afterTransactionCommit(event: TransactionCommitEvent): void | Promise<any> {
  //   const manager = event.manager;

  //   // const bookAttrRepo = manager.getRepository(BookAttribute);
  //   // await bookAttrRepo.save({ attribute: 'asadasd' });

  //   console.log('is this work');
  // }
}
