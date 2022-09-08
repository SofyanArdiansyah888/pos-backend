import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductInput } from './input/create-product.input';
import { UpdateProductInput } from './input/update-product.input';
import { Prisma } from '@prisma/client';
import { DeleteProductInput } from './input/delete-product.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';

@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => ProductEntity)
  createProduct(@Args('createProductInput') data: CreateProductInput) {
    let temp = {
      ...data,
      productNumber:"xxx"
    }
    return this.productService.create(temp);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [ProductEntity])
  products() {
    return this.productService.findAll({
      take: 10,
      orderBy: { id: Prisma.SortOrder.desc },
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
