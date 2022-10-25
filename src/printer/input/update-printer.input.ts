import { CreatePrinterInput } from './create-printer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrinterInput extends PartialType(CreatePrinterInput) {
  @Field(() => Int)
  id: number;
}
