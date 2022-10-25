import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PrinterService } from './printer.service';
import { Printer } from './entities/printer.entity';
import { CreatePrinterInput } from './input/create-printer.input';
import { UpdatePrinterInput } from './input/update-printer.input';

@Resolver(() => Printer)
export class PrinterResolver {
  constructor(private readonly printerService: PrinterService) {}

  @Mutation(() => Printer)
  createPrinter(@Args('createPrinterInput') createPrinterInput: CreatePrinterInput) {
    return this.printerService.create(createPrinterInput);
  }

  @Query(() => [Printer], { name: 'printer' })
  findAll() {
    return this.printerService.findAll();
  }

  @Query(() => Printer, { name: 'printer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.printerService.findOne(id);
  }

  @Mutation(() => Printer)
  updatePrinter(@Args('updatePrinterInput') updatePrinterInput: UpdatePrinterInput) {
    return this.printerService.update(updatePrinterInput.id, updatePrinterInput);
  }

  @Mutation(() => Printer)
  removePrinter(@Args('id', { type: () => Int }) id: number) {
    return this.printerService.remove(id);
  }
}
