import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WastedStockService } from './wasted-stock.service';
import { WastedStock } from './entities/wasted-stock.entity';
import { CreateWastedStockInput } from './dto/create-wasted-stock.input';
import { UpdateWastedStockInput } from './dto/update-wasted-stock.input';

@Resolver(() => WastedStock)
export class WastedStockResolver {
  constructor(private readonly wastedStockService: WastedStockService) {}

  @Mutation(() => WastedStock)
  createWastedStock(@Args('createWastedStockInput') createWastedStockInput: CreateWastedStockInput) {
    return this.wastedStockService.create(createWastedStockInput);
  }

  @Query(() => [WastedStock], { name: 'wastedStock' })
  findAll() {
    return this.wastedStockService.findAll();
  }

  @Query(() => WastedStock, { name: 'wastedStock' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wastedStockService.findOne(id);
  }

  @Mutation(() => WastedStock)
  updateWastedStock(@Args('updateWastedStockInput') updateWastedStockInput: UpdateWastedStockInput) {
    return this.wastedStockService.update(updateWastedStockInput.id, updateWastedStockInput);
  }

  @Mutation(() => WastedStock)
  removeWastedStock(@Args('id', { type: () => Int }) id: number) {
    return this.wastedStockService.remove(id);
  }
}
