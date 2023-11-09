import { Module } from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { ProdottiController } from './prodotti.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdottoSchema } from 'src/shema/prodotti.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Prodotto', schema: ProdottoSchema, collection: 'Prodotti' },
    ]),
  ],
  controllers: [ProdottiController],
  providers: [ProdottiService],
})
export class ProdottiModule {}
