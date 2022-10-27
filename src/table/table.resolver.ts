import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TableService } from './table.service';
import { TableEntity } from './entities/table.entity';
import { CreateTableInput } from './input/create-table.input';
import { UpdateTableInput } from './input/update-table.input';
import { FindTableInput } from './input/find-table.input';
import { DeleteTableInput } from './input/delete-table.input';
import { Prisma } from '@prisma/client';

@Resolver(() => TableEntity)
export class TableResolver {
  constructor(private readonly tableService: TableService) {}

  @Mutation(() => TableEntity)
  createTable(@Args('createTableInput') data: CreateTableInput) {
    return this.tableService.create(data);
  }

  @Query(() => [TableEntity], { nullable: true })
  tables(@Args('findTableInput', { nullable: true }) data: FindTableInput) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.tableService.findAll({
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

  @Query(() => TableEntity)
  table(@Args('id') id: number) {
    return this.tableService.findOne({
      id,
    });
  }

  @Mutation(() => TableEntity)
  updateTable(@Args('updateTableInput') data: UpdateTableInput) {
    return this.tableService.update({
      where: { id: data.id },
      data,
    });
  }

  @Mutation(() => TableEntity)
  deleteTable(@Args('id') { id }: DeleteTableInput) {
    return this.tableService.remove({
      id,
    });
  }
}
