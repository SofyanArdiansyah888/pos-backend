import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CustomerCreateInput) {
    return this.prisma.customer.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CustomerWhereUniqueInput;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput;
  }) {
    return this.prisma.customer.findMany({ ...params });
  }

  findOne(where: Prisma.CustomerWhereUniqueInput) {
    return this.prisma.customer.findUnique({ where });
  }

  async update(params: {
    where: Prisma.CustomerWhereUniqueInput;
    data: Prisma.CustomerUpdateInput;
  }) {
    return this.prisma.customer.update({ ...params });
  }

  remove(where: Prisma.CustomerWhereUniqueInput) {
    return this.prisma.customer.delete({ where });
  }
}
