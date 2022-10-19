import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './input/create-category.input';
import { DeleteCategoryInput } from './input/delete-category.input';
import { UpdateCategoryInput } from './input/update-category.input';
import { CategoryEntity } from './entities/category.entity';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { FindCategoryInput } from './input/find-category.input';

@UseGuards(JwtGuard)
@Resolver(() => CategoryEntity)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => CategoryEntity)
  createCategory(@Args('createCategoryInput') data: CreateCategoryInput) {
    return this.categoryService.create(data);
  }

  @Query(() => [CategoryEntity], { nullable: true })
  categories(
    @Args('findCategoryInput', { nullable: true }) data: FindCategoryInput,
  ) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.categoryService.findAll({
      take,
      skip,
      cursor: {
        id: cursor,
      },
      where: {
        OR: [
          {
            name: filter,
          },
        ],
      },
      orderBy: {
        id: Prisma.SortOrder.desc,
      },
    });
  }

  @Query(() => CategoryEntity)
  category(@Args('id') id: number) {
    return this.categoryService.findOne({
      id,
    });
  }

  @Mutation(() => CategoryEntity)
  updateCategory(@Args('updateCategoryInput') data: UpdateCategoryInput) {
    return this.categoryService.update({
      where: { id: data.id },
      data,
    });
  }

  @Mutation(() => CategoryEntity)
  deleteCategory(@Args('id') { id }: DeleteCategoryInput) {
    return this.categoryService.remove({
      id,
    });
  }
}
