import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DiscountService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.DiscountCreateInput) {
    return this.prisma.discount.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DiscountWhereUniqueInput;
    where?: Prisma.DiscountWhereInput;
    orderBy?: Prisma.DiscountOrderByWithRelationInput;
  }){
    return this.prisma.discount.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.DiscountWhereUniqueInput) {
    return this.prisma.discount.findUnique({ where });
  }

  update(params: {
    where: Prisma.DiscountWhereUniqueInput;
    data: Prisma.DiscountUpdateInput;
  }) {
    return this.prisma.discount.update({
      ...params,
    });
  }

  remove(where: Prisma.DiscountWhereUniqueInput) {
    return this.prisma.discount.delete({
      where,
    });
  }
}
