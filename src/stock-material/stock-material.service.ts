import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AddStockMaterialInput } from './input/add-stock-material.input';

@Injectable()
export class StockMaterialService {
  constructor(private readonly prisma: PrismaService) {}

  add(data: AddStockMaterialInput) {
    return this.prisma.stockMaterial.create({
      data: {
        ...data,
      },
    });
  }
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StockMaterialWhereUniqueInput;
    where?: Prisma.StockMaterialWhereInput;
    orderBy?: Prisma.StockMaterialOrderByWithRelationInput;
  }) {
    return await this.prisma.stockMaterial.findMany({
      ...params,
      include: {
        material: true,
      },
    });
  }

  findOne(where: Prisma.StockMaterialWhereUniqueInput) {
    return this.prisma.stockMaterial.findUnique({
      where,
      include: {
        material: true,
      },
    });
  }
}
