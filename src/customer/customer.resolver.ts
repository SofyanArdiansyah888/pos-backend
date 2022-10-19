import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { CustomerEntity } from './entities/customer.entity';
import { CreateCustomerInput } from './input/create-customer.input';
import { DeleteCustomerInput } from './input/delete-customer.input';
import { UpdateCustomerInput } from './input/update-customer.input';
import { FindCustomerInput } from './input/find-customer.input';
import { CustomerService } from './customer.service';

// @UseGuards(JwtGuard)
@Resolver(() => CustomerEntity)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => CustomerEntity)
  async createCustomer(@Args('createCustomerInput') data: CreateCustomerInput) {
    return this.customerService.create(data);
  }

  @Query(() => [CustomerEntity], { nullable: true })
  customers(
    @Args('findCustomerInput', { nullable: true }) data: FindCustomerInput,
  ) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.customerService.findAll({
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

  @Query(() => CustomerEntity)
  customer(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.findOne({ id });
  }

  @Mutation(() => CustomerEntity)
  updateCustomer(@Args('updateCustomerInput') data: UpdateCustomerInput) {
    return this.customerService.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  @Mutation(() => CustomerEntity)
  deleteCustomer(@Args('id') { id }: DeleteCustomerInput) {
    return this.customerService.remove({ id });
  }
}
