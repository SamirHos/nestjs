import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mongoose from 'mongoose';
import { ProdottiModule } from './prodotti/prodotti.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdottoSchema } from './shema/prodotti.schema';
// import { ProdottoSchema } from './prodotti/';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    MongooseModule.forRoot(process.env.MONGO_HOST, {
      dbName: process.env.MONGO_DB,
    }),

    ProdottiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
