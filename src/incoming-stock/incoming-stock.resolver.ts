import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IncomingStockEntity } from './entities/incoming-stock.entity';
import { IncomingStockService } from './incoming-stock.service';
import { CreateIncomingStockInput } from './input/create-incoming-stock.input';
import { FindIncomingStockInput } from './input/find-incoming-stock.input';

@Resolver(() => IncomingStockEntity)
export class IncomingStockResolver {
  constructor(private readonly incomingStockService: IncomingStockService) {}

  @Mutation(() => IncomingStockEntity)
  createIncomingStock(
    @Args('createIncomingStockInput')
    createIncomingStockInput: CreateIncomingStockInput,
  ) {
    return this.incomingStockService.create(createIncomingStockInput);
  }

  @Query(() => [IncomingStockEntity])
  incomingStocks(
    @Args('findProductInput', { nullable: true }) data: FindIncomingStockInput,
  ) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.incomingStockService.findAll({
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

  // @Query(() => IncomingStock, { name: 'incomingStock' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.incomingStockService.findOne(id);
  // }

  // @Mutation(() => IncomingStock)
  // updateIncomingStock(@Args('updateIncomingStockInput') updateIncomingStockInput: UpdateIncomingStockInput) {
  //   return this.incomingStockService.update(updateIncomingStockInput.id, updateIncomingStockInput);
  // }

  // @Mutation(() => IncomingStock)
  // removeIncomingStock(@Args('id', { type: () => Int }) id: number) {
  //   return this.incomingStockService.remove(id);
  // }
}
