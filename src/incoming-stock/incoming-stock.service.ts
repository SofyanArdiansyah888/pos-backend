import { Injectable } from '@nestjs/common';
import { CreateIncomingStockInput } from './dto/create-incoming-stock.input';
import { UpdateIncomingStockInput } from './dto/update-incoming-stock.input';

@Injectable()
export class IncomingStockService {
  create(createIncomingStockInput: CreateIncomingStockInput) {
    return 'This action adds a new incomingStock';
  }

  findAll() {
    return `This action returns all incomingStock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incomingStock`;
  }

  update(id: number, updateIncomingStockInput: UpdateIncomingStockInput) {
    return `This action updates a #${id} incomingStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} incomingStock`;
  }
}
