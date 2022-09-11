import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { TaxEntity } from './entities/tax.entity';
import { CreateTaxInput } from './input/create-tax.input';
import { DeleteTaxInput } from './input/delete-taxt.input';
import { UpdateTaxInput } from './input/update-tax.input';
import { TaxService } from './tax.service';

@UseGuards(JwtGuard)
@Resolver(() => TaxEntity)
export class TaxResolver {
  constructor(private readonly taxService: TaxService) {}

  @Mutation(() => TaxEntity)
  createTax(@Args('createTaxInput') data: CreateTaxInput) {
    return this.taxService.create(data);
  }

  @Query(() => [TaxEntity])
  taxes() {
    return this.taxService.findAll({
      take: 10,
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
    });
  }

  @Query(() => TaxEntity)
  tax(@Args('id') id: number) {
    return this.taxService.findOne({ id });
  }

  @Mutation(() => TaxEntity)
  updateTax(@Args('updateTaxInput') data: UpdateTaxInput) {
    return this.taxService.update({ where: { id: data.id }, data });
  }

  @Mutation(() => TaxEntity)
  deleteTax(@Args('id') {id}: DeleteTaxInput) {
    return this.taxService.remove({ id });
  }
}
