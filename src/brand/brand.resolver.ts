import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrandService } from './brand.service';
import { CreateBrandInput } from './input/create-brand.input';
import { UpdateBrandInput } from './input/update-brand.input';
import { DeleteBrandInput } from './input/delete-brand.input';
import { Prisma } from '@prisma/client';
import { BrandEntity } from './entities/brand.entity';

@Resolver(() => BrandEntity)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Mutation(() => BrandEntity)
  createBrand(@Args('createBrandInput') data: CreateBrandInput) {
    return this.brandService.create(data);
  }

  @Query(() => [BrandEntity])
  brands() {
    return this.brandService.findAll({
      take:10,
      orderBy:{
        id:Prisma.SortOrder.desc
      }
    });
  }

  @Query(() => BrandEntity)
  brand(@Args('id') id: number) {
    return this.brandService.findOne({ id });
  }

  @Mutation(() => BrandEntity)
  updateBrand(@Args('updateBrandInput') data: UpdateBrandInput) {
    return this.brandService.update({
      where:{
        id:data.id
      },
      data
    });
  }

  @Mutation(() => BrandEntity)
  deleteBrand(@Args('id') id: DeleteBrandInput) {
    return this.brandService.remove(id);
  }
}
