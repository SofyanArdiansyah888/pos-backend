import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { TaxEntity } from './entities/tax.entity';

@Injectable()
export class TaxService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TaxCreateInput): Promise<TaxEntity> {
    return this.prisma.tax.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TaxWhereUniqueInput;
    where?: Prisma.TaxWhereInput;
    orderBy?: Prisma.TaxOrderByWithRelationInput;
  }): Promise<TaxEntity[]> {
    return this.prisma.tax.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.TaxWhereUniqueInput): Promise<TaxEntity|null> {
    return this.prisma.tax.findUnique({ where });
  }

  update(params: {
    where: Prisma.TaxWhereUniqueInput;
    data: Prisma.TaxUpdateInput;
  }) : Promise<TaxEntity>{
    return this.prisma.tax.update({
      ...params,
    });
  }

  remove(where: Prisma.TaxWhereUniqueInput): Promise<TaxEntity> {
    return this.prisma.tax.delete({ where });
  }
}
