import { Injectable } from '@nestjs/common';
import { CreateOpnameStockInput } from './dto/create-opname-stock.input';
import { UpdateOpnameStockInput } from './dto/update-opname-stock.input';

@Injectable()
export class OpnameStockService {
  create(createOpnameStockInput: CreateOpnameStockInput) {
    return 'This action adds a new opnameStock';
  }

  findAll() {
    return `This action returns all opnameStock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opnameStock`;
  }

  update(id: number, updateOpnameStockInput: UpdateOpnameStockInput) {
    return `This action updates a #${id} opnameStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} opnameStock`;
  }
}
