import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => ProductEntity)
  createProduct(@Args('createProductInput') data: CreateProductInput) {
    return this.productService.create(data);
  }

  @Query(() => [ProductEntity])
  products() {
    return this.productService.findAll();
  }

  @Query(() => ProductEntity)
  product(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => ProductEntity)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(() => ProductEntity)
  deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }
}
