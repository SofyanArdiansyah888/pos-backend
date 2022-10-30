import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IncomingStockService } from './incoming-stock.service';
import { IncomingStock } from './entities/incoming-stock.entity';
import { CreateIncomingStockInput } from './dto/create-incoming-stock.input';
import { UpdateIncomingStockInput } from './dto/update-incoming-stock.input';

@Resolver(() => IncomingStock)
export class IncomingStockResolver {
  constructor(private readonly incomingStockService: IncomingStockService) {}

  @Mutation(() => IncomingStock)
  createIncomingStock(@Args('createIncomingStockInput') createIncomingStockInput: CreateIncomingStockInput) {
    return this.incomingStockService.create(createIncomingStockInput);
  }

  @Query(() => [IncomingStock], { name: 'incomingStock' })
  findAll() {
    return this.incomingStockService.findAll();
  }

  @Query(() => IncomingStock, { name: 'incomingStock' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.incomingStockService.findOne(id);
  }

  @Mutation(() => IncomingStock)
  updateIncomingStock(@Args('updateIncomingStockInput') updateIncomingStockInput: UpdateIncomingStockInput) {
    return this.incomingStockService.update(updateIncomingStockInput.id, updateIncomingStockInput);
  }

  @Mutation(() => IncomingStock)
  removeIncomingStock(@Args('id', { type: () => Int }) id: number) {
    return this.incomingStockService.remove(id);
  }
}
