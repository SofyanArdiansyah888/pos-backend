import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { ProductEntity } from './entities/product.entity';
import { CreateProductInput } from './input/create-product.input';
import { DeleteProductInput } from './input/delete-product.input';
import { FindProductInput } from './input/find-product.input';
import { UpdateProductInput } from './input/update-product.input';
import { ProductService } from './product.service';

// @UseGuards(JwtGuard)
@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => ProductEntity, { nullable: true })
  createProduct(@Args('createProductInput') data: CreateProductInput) {
    return this.productService.create(data);
  }

  @Query(() => [ProductEntity], { nullable: true })
  products(
    @Args('findProductInput', { nullable: true }) data: FindProductInput,
  ) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.productService.findAll({
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

  @Query(() => ProductEntity)
  product(@Args('id') id: number) {
    return this.productService.findOne({ id });
  }

  @Mutation(() => ProductEntity)
  updateProduct(@Args('updateProductInput') data: UpdateProductInput) {
    return this.productService.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  @Mutation(() => ProductEntity)
  deleteProduct(@Args('id') { id }: DeleteProductInput) {
    return this.productService.remove({ id });
  }
}
