import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Prodotto {
  @Prop()
  nome: string;
  @Prop()
  prezzo: number;
  @Prop()
  discontinued: boolean;
}
export const ProdottoSchema = SchemaFactory.createForClass(Prodotto);
