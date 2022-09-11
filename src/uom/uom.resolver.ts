import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UomService } from './uom.service';
import { UomEntity } from './entities/uom.entity';
import { CreateUomInput } from './input/create-uom.input';
import { UpdateUomInput } from './input/update-uom.input';
import { Prisma } from '@prisma/client';
import { DeleteUomInput } from './input/delete-uom.input';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Resolver(() => UomEntity)
export class UomResolver {
  constructor(private readonly uomService: UomService) {}

  @Mutation(() => UomEntity)
  createUom(@Args('createUomInput') data: CreateUomInput) {
    return this.uomService.create(data);
  }

  @Query(() => [UomEntity])
  uoms() {
    return this.uomService.findAll({
      take: 10,
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
    });
  }

  @Query(() => UomEntity)
  uom(@Args('id') id: number) {
    return this.uomService.findOne({id});
  }

  @Mutation(() => UomEntity)
  updateUom(@Args('updateUomInput') data: UpdateUomInput) {
    return this.uomService.update({
      where:{
        id:data.id
      },
      data
    });
  }

  @Mutation(() => UomEntity)
  deleteUom(@Args('id') id: DeleteUomInput) {
    return this.uomService.remove(id);
  }
}
