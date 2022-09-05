import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    let password = await argon2.hash(data.password);
    return this.prisma.user.create({
      data: {
        ...data,
        password,
      },
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    return this.prisma.user.findMany({ ...params });
  }

  findOne(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where });
  }

  update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    return this.prisma.user.update({ ...params });
  }

  remove(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }
}
