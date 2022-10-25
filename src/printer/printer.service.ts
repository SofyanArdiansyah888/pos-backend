import { Injectable } from '@nestjs/common';
import { CreatePrinterInput } from './input/create-printer.input';
import { UpdatePrinterInput } from './input/update-printer.input';

@Injectable()
export class PrinterService {
  create(createPrinterInput: CreatePrinterInput) {
    return 'This action adds a new printer';
  }

  findAll() {
    return `This action returns all printer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} printer`;
  }

  update(id: number, updatePrinterInput: UpdatePrinterInput) {
    return `This action updates a #${id} printer`;
  }

  remove(id: number) {
    return `This action removes a #${id} printer`;
  }
}
