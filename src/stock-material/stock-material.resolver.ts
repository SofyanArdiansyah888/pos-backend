import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StockMaterialEntity } from './entities/stock-material.entity';
import { AddStockMaterialInput } from './input/add-stock-material.input';
import { FindStockMaterialInput } from './input/find-stock-material.input';
import { StockMaterialService } from './stock-material.service';

@Resolver(() => StockMaterialEntity)
export class StockMaterialResolver {
  constructor(private readonly stockMaterialService: StockMaterialService) {}

  @Query(() => [StockMaterialEntity, { nullable: true }])
  stockMaterials(
    @Args('findStockMaterialInput', { nullable: true })
    data: FindStockMaterialInput,
  ) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.stockMaterialService.findAll({
      take,
      skip,
      // cursor: {
      //   id: cursor,
      // },
      // where: {
      //   OR: [
      //     {
      //       name: filter,
      //     },
      //   ],
      // },
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
    });
  }

  @Query(() => StockMaterialEntity)
  stockMaterial(@Args('id') id: number) {
    return this.stockMaterialService.findOne({ id });
  }

  @Mutation(() => StockMaterialEntity, { nullable: true })
  addStockMaterial(
    @Args('addStockMaterialInput')
    createStockMaterialInput: AddStockMaterialInput,
  ) {
    return this.stockMaterialService.add(createStockMaterialInput);
  }
}
