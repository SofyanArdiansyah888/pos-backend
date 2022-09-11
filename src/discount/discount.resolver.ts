import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiscountService } from './discount.service';
import { DiscountEntity } from './entities/discount.entity';
import { CreateDiscountInput } from './input/create-discount.input';
import { UpdateDiscountInput } from './input/update-discount.input';
import { Prisma } from '@prisma/client';
import { DeleteDiscountInput } from './input/delete-discount.input';
import { JwtGuard } from '../auth/guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtGuard)
@Resolver(() => DiscountEntity)
export class DiscountResolver {
  constructor(private readonly discountService: DiscountService) {}

  @Mutation(() => DiscountEntity)
  createDiscount(@Args('createDiscountInput') data: CreateDiscountInput) {
    return this.discountService.create(data);
  }

  @Query(() => [DiscountEntity])
  discounts() {
    return this.discountService.findAll({
      take:10,
      orderBy:{
        id:Prisma.SortOrder.desc
      }
    });
  }

  @Query(() => DiscountEntity)
  discount(@Args('id') id: number) {
    return this.discountService.findOne({ id });
  }

  @Mutation(() => DiscountEntity)
  updateDiscount(@Args('updateDiscountInput') data: UpdateDiscountInput) {
    return this.discountService.update({
      where:{
        id:data.id
      },
      data
    });
  }

  @Mutation(() => DiscountEntity)
  deleteDiscount(@Args('id') {id}: DeleteDiscountInput) {
    return this.discountService.remove({ id });
  }
}
