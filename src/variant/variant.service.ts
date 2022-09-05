import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VariantService {
  constructor(private readonly prisma:PrismaService){}

  create(data: Prisma.VariantCreateInput) {
    return this.prisma.variant.create({data});
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VariantWhereUniqueInput;
    where?: Prisma.VariantWhereInput;
    orderBy?: Prisma.VariantOrderByWithRelationInput;
  }) {
    return this.prisma.variant.findMany({ ...params });
  }

  findOne(where:Prisma.VariantWhereUniqueInput) {
    return this.prisma.variant.findUnique({ where });
  }

  update(params:{
    where:Prisma.VariantWhereUniqueInput,
    data: Prisma.VariantUpdateInput
  }) {
    return this.prisma.variant.update({ ...params });
  }

  remove(where:Prisma.VariantWhereUniqueInput) {
    return this.prisma.variant.delete({ where });
  }
}
