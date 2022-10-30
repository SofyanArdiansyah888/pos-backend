import { CreateWastedStockInput } from './create-wasted-stock.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWastedStockInput extends PartialType(CreateWastedStockInput) {
  @Field(() => Int)
  id: number;
}
