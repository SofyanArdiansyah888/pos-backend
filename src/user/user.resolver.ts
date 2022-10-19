import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './input/create-user.input';
import { DeleteUserInput } from './input/delete-user.input';
import { UpdateUserInput } from './input/update-user.input';
import { FindUserInput } from './input/find-user.input';
import { UserService } from './user.service';

// @UseGuards(JwtGuard)
@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(@Args('createUserInput') data: CreateUserInput) {
    return this.userService.create(data);
  }

  @Query(() => [UserEntity], { nullable: true })
  users(@Args('findUserInput', { nullable: true }) data: FindUserInput) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.userService.findAll({
      take: 10,
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

  @Query(() => UserEntity)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne({ id });
  }

  @Mutation(() => UserEntity)
  updateUser(@Args('updateUserInput') data: UpdateUserInput) {
    return this.userService.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  @Mutation(() => UserEntity)
  deleteUser(@Args('id') { id }: DeleteUserInput) {
    return this.userService.remove({ id });
  }
}
