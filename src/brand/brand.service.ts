import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { BrandEntity } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.BrandCreateInput): Promise<BrandEntity> {
    return this.prisma.brand.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BrandWhereUniqueInput;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput;
  }):Promise<BrandEntity[]> {
    return this.prisma.brand.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.BrandWhereUniqueInput): Promise<BrandEntity> {
    return this.prisma.brand.findUnique({ where });
  }

  update(params: {
    where: Prisma.BrandWhereUniqueInput;
    data: Prisma.BrandUpdateInput;
  }): Promise<BrandEntity> {
    return this.prisma.brand.update({
      ...params,
    });
  }

  remove(where: Prisma.BrandWhereUniqueInput): Promise<BrandEntity> {
    return this.prisma.brand.delete({
      where,
    });
  }
}
