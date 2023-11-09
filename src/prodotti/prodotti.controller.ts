import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { error } from 'console';

@Controller('prodotti')
export class ProdottiController {
  constructor(private readonly prodottiService: ProdottiService) {}

  @Post()
  create(@Body() createProdottiDto: CreateProdottiDto) {
    const pCreato = this.prodottiService.createProdotto(createProdottiDto);
    return pCreato;
  }

  @Get()
  findAll() {
    return this.prodottiService.getAllProdotti();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.prodottiService.getProdotto(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProdottiDto: UpdateProdottiDto) {
  //   return this.prodottiService.updateProdotto(+id, updateProdottiDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.prodottiService.deleteProdotto();
  // }
}
