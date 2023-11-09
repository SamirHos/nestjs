import { Document } from 'mongoose';
export interface IProdotto extends Document {
  readonly nome: string;
  readonly prezzo: number;
  readonly discontinued: boolean;
}
