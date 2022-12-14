import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderProductService } from './order-product.service';
import { OrderProductEntity } from './entities/order-product.entity';
import { CreateOrderProductInput } from './input/create-order-product.input';
import { UpdateOrderProductInput } from './input/update-order-product.input';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';

// @UseGuards(JwtGuard)
@Resolver(() => OrderProductEntity)
export class OrderProductResolver {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Mutation(() => OrderProductEntity)
  createOrderProduct(@Args('createOrderProductInput') createOrderProductInput: CreateOrderProductInput) {
    return this.orderProductService.create(createOrderProductInput);
  }

  @Query(() => [OrderProductEntity], { name: 'orderProduct' })
  findAll() {
    return this.orderProductService.findAll();
  }

  @Query(() => OrderProductEntity, { name: 'orderProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderProductService.findOne(id);
  }

  @Mutation(() => OrderProductEntity)
  updateOrderProduct(@Args('updateOrderProductInput') updateOrderProductInput: UpdateOrderProductInput) {
    return this.orderProductService.update(updateOrderProductInput.id, updateOrderProductInput);
  }

  @Mutation(() => OrderProductEntity)
  removeOrderProduct(@Args('id', { type: () => Int }) id: number) {
    return this.orderProductService.remove(id);
  }
}
