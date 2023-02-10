import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from 'data-source';
import {
  addTransactionalDataSource,
  initializeTransactionalContext,
} from 'typeorm-transactional';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmCustomModule } from './typeorm-custom/typeorm-custom.module';
import { BookAttribute } from './entities/book-attribute.entity';
import { BookRepository } from './repositories/book.repository';
import { BookAttributeRepository } from './repositories/book-attribute.repository';
import { BookSubscriber } from './subscribers/book.subscriber';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({}),
      dataSourceFactory: async () => {
        initializeTransactionalContext();
        return addTransactionalDataSource(dataSource);
      },
    }),
    TypeOrmCustomModule.forFeature([BookRepository, BookAttributeRepository]),
  ],
  controllers: [AppController],
  providers: [AppService, BookSubscriber],
})
export class AppModule {}
