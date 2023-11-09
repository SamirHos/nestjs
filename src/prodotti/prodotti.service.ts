import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProdotto } from './interfaccia/prodotti.interfaccia';
import { Prodotto } from 'src/shema/prodotti.schema';

@Injectable()
export class ProdottiService {
  constructor(
    @InjectModel('Prodotto') private prodottoModel: Model<Prodotto>,
  ) {}

  async createProdotto(
    createProdottoDto: CreateProdottiDto,
  ): Promise<IProdotto> {
    const newProdotto = await new this.prodottoModel(createProdottoDto);
    return newProdotto.save();
  }

  async updateProdotto(
    prodottoId: string,
    updateProdottoDto: UpdateProdottiDto,
  ): Promise<IProdotto> {
    const existingStudent = await this.prodottoModel.findByIdAndUpdate(
      prodottoId,
      updateProdottoDto,
      { new: true },
    );
    if (!existingStudent) {
      throw new NotFoundException(`Prodotto #${prodottoId} not found`);
    }
    return existingStudent;
  }

  async getAllProdotti(): Promise<IProdotto[]> {
    const prodottoData = await this.prodottoModel.find();
    if (!prodottoData || prodottoData.length == 0) {
      throw new NotFoundException('Prodotti  not found!');
    }
    return prodottoData;
  }

  async getProdotto(prodottoId: string): Promise<IProdotto> {
    const existingProdotto = await this.prodottoModel
      .findById(prodottoId)
      .exec();
    if (!existingProdotto) {
      throw new NotFoundException(`Prodotto #${prodottoId} not found`);
    }
    return existingProdotto;
  }

  async deleteProdotto(studentId: string): Promise<IProdotto> {
    const deletedProdotto =
      await this.prodottoModel.findByIdAndDelete(studentId);
    if (!deletedProdotto) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }
    return deletedProdotto;
  }
}

// create(createProdottiDto: CreateProdottiDto) {
//   return 'This action adds a new prodotti';
// }

// findAll() {
//   return `This action returns all prodotti`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} prodotti`;
// }

// update(id: number, updateProdottiDto: UpdateProdottiDto) {
//   return `This action updates a #${id} prodotti`;
// }

// remove(id: number) {
//   return `This action removes a #${id} prodotti`;
// }
