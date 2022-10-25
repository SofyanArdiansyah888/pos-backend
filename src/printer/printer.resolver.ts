import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrinterEntity } from './entities/printer.entity';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { PrinterService } from './printer.service';
import { CreatePrinterInput } from './input/create-printer.input';
import { FindPrinterInput } from '../printer/input/find-printer.input';
import { UpdatePrinterInput } from '../printer/input/update-printer.input';
import { DeletePrinterInput } from '../printer/input/delete-printer.input';

// @UseGuards(JwtGuard)
@Resolver(() => PrinterEntity)
export class PrinterResolver {
  constructor(private readonly printerService: PrinterService) {}

  @Mutation(() => PrinterEntity)
  createPrinter(@Args('createPrinterInput') data: CreatePrinterInput) {
    return this.printerService.create(data);
  }

  @Query(() => [PrinterEntity], { nullable: true })
  printers(
    @Args('findPrinterInput', { nullable: true }) data: FindPrinterInput,
  ) {
    const { take, skip, cursor, filter } = data || { take: 10, cursor: 0 };
    return this.printerService.findAll({
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

  @Query(() => PrinterEntity)
  printer(@Args('id') id: number) {
    return this.printerService.findOne({
      id,
    });
  }

  @Mutation(() => PrinterEntity)
  updatePrinter(@Args('updatePrinterInput') data: UpdatePrinterInput) {
    return this.printerService.update({
      where: { id: data.id },
      data,
    });
  }

  @Mutation(() => PrinterEntity)
  deletePrinter(@Args('id') { id }: DeletePrinterInput) {
    return this.printerService.remove({
      id,
    });
  }
}
