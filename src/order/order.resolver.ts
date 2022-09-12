import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderEntity } from './entities/order.entity';
import { CreateOrderInput } from './input/create-order.input';
import { UpdateOrderInput } from './input/update-order.input';
import { DeleteOrderInput } from './input/delete-order.input';
import { Prisma } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtGuard)
@Resolver(() => OrderEntity)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => OrderEntity)
  createOrder(@Args('createOrderInput') data: CreateOrderInput) {
    return this.orderService.create({
      ...data,
      orderProduct:{
        create:[
          ...data.orderProduct
        ]
      }
    });
  }

  @Query(() => [OrderEntity])
  orders() {
    return this.orderService.findAll({
      take:10,
      orderBy:{
        id:Prisma.SortOrder.desc
      }
    });
  }

  @Query(() => OrderEntity)
  order(@Args('id') id: number) {
    return this.orderService.findOne({id});
  }

  @Mutation(() => OrderEntity)
  updateOrder(@Args('updateOrderInput') data: UpdateOrderInput) {
    return this.orderService.update({
      where:{id:data.id},
      data:{
        ...data,
        orderProduct:{
          update:[
            {
              where:{
                id:data.id
              },
              data:{
                ...data.orderProduct
              }
            }
          ]
        }
      }
    });
  }

  @Mutation(() => OrderEntity)
  removeOrder(@Args('id') {id}: DeleteOrderInput) {
    return this.orderService.remove({id});
  }
}
