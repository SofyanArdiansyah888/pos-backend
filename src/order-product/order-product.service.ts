import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderProductInput } from './input/create-order-product.input';
import { UpdateOrderProductInput } from './input/update-order-product.input';

@Injectable()
export class OrderProductService {
  constructor(private readonly prisma:PrismaService){}


  create(data: CreateOrderProductInput) {
    return 'This action adds a new orderProduct';
  }

  findAll() {
    return `This action returns all orderProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderProduct`;
  }

  update(id: number, data: UpdateOrderProductInput) {
    return `This action updates a #${id} orderProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderProduct`;
  }
}
