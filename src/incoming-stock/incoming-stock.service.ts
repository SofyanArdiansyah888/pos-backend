import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { IncomingStockEntity } from './entities/incoming-stock.entity';
import { CreateIncomingStockInput } from './input/create-incoming-stock.input';
import { UpdateIncomingStockInput } from './input/update-incoming-stock.input';

@Injectable()
export class IncomingStockService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateIncomingStockInput): Promise<IncomingStockEntity> {
    const incomingStock = { ...data };
    delete incomingStock.createIncomingStockMaterialInput;
    return await this.prisma.incomingStock.create({
      data: {
        ...incomingStock,
        incomingStockMaterial: {
          create: data.createIncomingStockMaterialInput,
        },
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.IncomingStockWhereUniqueInput;
    where?: Prisma.IncomingStockWhereInput;
    orderBy?: Prisma.IncomingStockOrderByWithRelationInput;
  }) {
    return await this.prisma.incomingStock.findMany({
      ...params,
      include: {
        incomingStockMaterial: true,
      },
    });
  }

  // findOne(where: Prisma.IncomingStockWhereUniqueInput) {
  //   return this.prisma.incomingStock.findUnique({
  //     where,
  //     include: {
  //       incomingStockMaterial: true,
  //     },
  //   });
  // }

  // update(params: {
  //   where: Prisma.IncomingStockWhereUniqueInput;
  //   data: UpdateIncomingStockInput;
  // }) {
  //   const { variants, product } = this.sanitizeUpdateInput(params.data);

  //   // return this.prisma.product.update({
  //   //   ...product,

  //   //   include: {
  //   //     variants: true,
  //   //     category: true,
  //   //   },
  //   // });
  // }

  remove(where: Prisma.IncomingStockWhereUniqueInput) {
    return this.prisma.incomingStock.delete({
      where,
    });
  }
}
