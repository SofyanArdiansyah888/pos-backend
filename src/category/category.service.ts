import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.CategoryCreateInput): Promise<CategoryEntity> {
    return this.prisma.category.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<CategoryEntity[]> {
    return this.prisma.category.findMany({
      ...params,
    });
  }

  findOne(where: Prisma.CategoryWhereUniqueInput): Promise<CategoryEntity> {
    return this.prisma.category.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<CategoryEntity> {
    return this.prisma.category.update({
      ...params,
    });
  }

  remove(where: Prisma.CategoryWhereUniqueInput): Promise<CategoryEntity> {
    return this.prisma.category.delete({
      where,
    });
  }
}
