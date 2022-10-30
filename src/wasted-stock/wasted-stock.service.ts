import { Injectable } from '@nestjs/common';
import { CreateWastedStockInput } from './dto/create-wasted-stock.input';
import { UpdateWastedStockInput } from './dto/update-wasted-stock.input';

@Injectable()
export class WastedStockService {
  create(createWastedStockInput: CreateWastedStockInput) {
    return 'This action adds a new wastedStock';
  }

  findAll() {
    return `This action returns all wastedStock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wastedStock`;
  }

  update(id: number, updateWastedStockInput: UpdateWastedStockInput) {
    return `This action updates a #${id} wastedStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} wastedStock`;
  }
}
