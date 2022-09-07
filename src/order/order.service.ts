import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.OrderCreateInput) {
    return this.prisma.order.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrderWhereUniqueInput;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput;
  }) {
    return this.prisma.order.findMany({
      ...params,
      include: {
        // orderProduct: true,
      },
    });
  }

  findOne(where: Prisma.OrderWhereUniqueInput) {
    return this.prisma.order.findUnique({ where });
  }

  update(params: {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.OrderUpdateInput;
  }) {
    return this.prisma.order.update({ ...params });
  }

  remove(where: Prisma.OrderWhereUniqueInput) {
    return this.prisma.order.delete({ where });
  }
}
