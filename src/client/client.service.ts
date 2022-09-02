import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.ClientWhereUniqueInput,
  ): Promise<ClientEntity | null> {
    return this.prisma.client.findUnique({
      where,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ClientWhereUniqueInput;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput;
  }): Promise<ClientEntity[]> {
    return this.prisma.client.findMany({
      ...params,
    });
  }

  async create(data: Prisma.UserCreateInput): Promise<ClientEntity> {
    return this.prisma.client.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<ClientEntity> {
    return this.prisma.client.update({
      ...params,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<ClientEntity> {
    return this.prisma.client.delete({
      where,
    });
  }
}
