import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OpnameStockService } from './opname-stock.service';
import { OpnameStock } from './entities/opname-stock.entity';
import { CreateOpnameStockInput } from './dto/create-opname-stock.input';
import { UpdateOpnameStockInput } from './dto/update-opname-stock.input';

@Resolver(() => OpnameStock)
export class OpnameStockResolver {
  constructor(private readonly opnameStockService: OpnameStockService) {}

  @Mutation(() => OpnameStock)
  createOpnameStock(@Args('createOpnameStockInput') createOpnameStockInput: CreateOpnameStockInput) {
    return this.opnameStockService.create(createOpnameStockInput);
  }

  @Query(() => [OpnameStock], { name: 'opnameStock' })
  findAll() {
    return this.opnameStockService.findAll();
  }

  @Query(() => OpnameStock, { name: 'opnameStock' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.opnameStockService.findOne(id);
  }

  @Mutation(() => OpnameStock)
  updateOpnameStock(@Args('updateOpnameStockInput') updateOpnameStockInput: UpdateOpnameStockInput) {
    return this.opnameStockService.update(updateOpnameStockInput.id, updateOpnameStockInput);
  }

  @Mutation(() => OpnameStock)
  removeOpnameStock(@Args('id', { type: () => Int }) id: number) {
    return this.opnameStockService.remove(id);
  }
}
