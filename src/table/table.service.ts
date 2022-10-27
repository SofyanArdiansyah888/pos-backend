import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { TableEntity } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TableCreateInput): Promise<any> {
    return this.prisma.table.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TableWhereUniqueInput;
    where?: Prisma.TableWhereInput;
    orderBy?: Prisma.TableOrderByWithRelationInput;
  }): Promise<any[]> {
    return this.prisma.table.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.TableWhereUniqueInput): Promise<any> {
    return this.prisma.table.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.TableWhereUniqueInput;
    data: Prisma.TableUpdateInput;
  }): Promise<any> {
    return this.prisma.table.update({
      ...params,
    });
  }

  remove(where: Prisma.TableWhereUniqueInput): Promise<any> {
    return this.prisma.table.delete({
      where,
    });
  }
}
