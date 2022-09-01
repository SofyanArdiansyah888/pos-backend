import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
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
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.client.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
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
    const { where, data } = params;
    return this.prisma.client.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<ClientEntity> {
    return this.prisma.client.delete({
      where,
    });
  }
}
