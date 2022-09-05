import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }) {
    return this.prisma.product.findMany({ ...params });
  }

  findOne(where: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.findUnique({ where });
  }

  update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }) {
    return this.prisma.product.update({ ...params });
  }

  remove(where: Prisma.ProductWhereUniqueInput) {
    return this.prisma.product.delete({ where });
  }
}
