import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUomInput } from './input/create-uom.input';
import { UomEntity } from './entities/uom.entity';

@Injectable()
export class UomService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUomInput):Promise<UomEntity> {
    return this.prisma.uOM.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UOMWhereUniqueInput;
    where?: Prisma.UOMWhereInput;
    orderBy?: Prisma.UOMOrderByWithRelationInput;
  }): Promise<UomEntity[]> {
    return this.prisma.uOM.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.UOMWhereUniqueInput): Promise<UomEntity> {
    return this.prisma.uOM.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.UOMWhereUniqueInput;
    data: Prisma.UOMUpdateInput;
  }):Promise<UomEntity> {
    return this.prisma.uOM.update({
      ...params,
    });
  }

  remove(where: Prisma.UOMWhereUniqueInput):Promise<UomEntity> {
    return this.prisma.uOM.delete({
      where,
    });
  }
}
