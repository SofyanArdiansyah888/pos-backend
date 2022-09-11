import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VariantService } from './variant.service';
import { VariantEntity } from './entities/variant.entity';
import { CreateVariantInput } from './input/create-variant.input';
import { UpdateVariantInput } from './input/update-variant.input';
import { Prisma } from '@prisma/client';
import { DeleteVariantInput } from './input/delete-variant.input';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Resolver(() => VariantEntity)
export class VariantResolver {
  constructor(private readonly variantService: VariantService) {}

  @Mutation(() => VariantEntity)
  createVariant(@Args('createVariantInput') data: CreateVariantInput) {
    return this.variantService.create({
      ...data
    });
  }

  @Query(() => [VariantEntity],{nullable:true})
  variants() {
    return this.variantService.findAll({
      take:10,
      orderBy:{id:Prisma.SortOrder.desc}
    });
  }

  @Query(() => VariantEntity, {nullable:true})
  variant(@Args('id', { type: () => Int }) id: number) {
    return this.variantService.findOne({ id });
  }

  @Mutation(() => VariantEntity)
  updateVariant(@Args('updateVariantInput') data: UpdateVariantInput) {
    return this.variantService.update({
      where:{id:data.id},
      data
    });
  }

  @Mutation(() => VariantEntity)
  deleteVariant(@Args('id', { type: () => Int }) {id}: DeleteVariantInput) {
    return this.variantService.remove({id});
  }
}
