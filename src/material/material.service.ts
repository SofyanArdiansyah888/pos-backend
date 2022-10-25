import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { MaterialEntity } from './entities/material.entity';

@Injectable()
export class MaterialService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.MaterialCreateInput) {
    return this.prisma.material.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MaterialWhereUniqueInput;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput;
  }) {
    return this.prisma.material.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.MaterialWhereUniqueInput) {
    return this.prisma.material.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.MaterialWhereUniqueInput;
    data: Prisma.MaterialUpdateInput;
  }) {
    return this.prisma.material.update({
      ...params,
    });
  }

  remove(where: Prisma.MaterialWhereUniqueInput) {
    return this.prisma.material.delete({
      where,
    });
  }
}
