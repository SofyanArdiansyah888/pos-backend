import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { PrinterEntity } from './entities/printer.entity';

@Injectable()
export class PrinterService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.PrinterCreateInput): Promise<PrinterEntity> {
    return this.prisma.printer.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PrinterWhereUniqueInput;
    where?: Prisma.PrinterWhereInput;
    orderBy?: Prisma.PrinterOrderByWithRelationInput;
  }): Promise<PrinterEntity[]> {
    return this.prisma.printer.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.PrinterWhereUniqueInput): Promise<PrinterEntity> {
    return this.prisma.printer.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.PrinterWhereUniqueInput;
    data: Prisma.PrinterUpdateInput;
  }): Promise<PrinterEntity> {
    return this.prisma.printer.update({
      ...params,
    });
  }

  remove(where: Prisma.PrinterWhereUniqueInput): Promise<PrinterEntity> {
    return this.prisma.printer.delete({
      where,
    });
  }
}
