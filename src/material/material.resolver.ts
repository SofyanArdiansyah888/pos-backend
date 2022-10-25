import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { MaterialEntity } from './entities/material.entity';
import { MaterialService } from './material.service';
import { DeleteMaterialInput } from './input/delete-material.input';
import { UpdateMaterialInput } from './input/update-material.input';
import { FindMaterialInput } from './input/find-material.input';
import { CreateMaterialInput } from './input/create-material.input';

// @UseGuards(JwtGuard)
@Resolver(() => MaterialEntity)
export class MaterialResolver {
  constructor(private readonly materialService: MaterialService) {}

  @Mutation(() => MaterialEntity)
  createMaterial(@Args('createMaterialInput') data: CreateMaterialInput) {
    return this.materialService.create({ ...data, stock: 0 });
  }

  @Query(() => [MaterialEntity], { nullable: true })
  materials(
    @Args('findMaterialInput', { nullable: true }) data: FindMaterialInput,
  ) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };

    return this.materialService.findAll({
      take,
      skip,
      // cursor: {
      //   id: cursor,
      // },
      where: {
        OR: [
          {
            type: {
              in: filter === 'RAW' ? ['RAW'] : ['SUPPORT'],
            },
          },
        ],
      },
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
    });
  }

  @Query(() => MaterialEntity)
  material(@Args('id') id: number) {
    return this.materialService.findOne({
      id,
    });
  }

  @Mutation(() => MaterialEntity)
  updateMaterial(@Args('updateMaterialInput') data: UpdateMaterialInput) {
    return this.materialService.update({
      where: { id: data.id },
      data,
    });
  }

  @Mutation(() => MaterialEntity)
  deleteMaterial(@Args('id') { id }: DeleteMaterialInput) {
    return this.materialService.remove({
      id,
    });
  }
}
