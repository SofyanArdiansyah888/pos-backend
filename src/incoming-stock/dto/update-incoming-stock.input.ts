import { CreateIncomingStockInput } from './create-incoming-stock.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIncomingStockInput extends PartialType(CreateIncomingStockInput) {
  @Field(() => Int)
  id: number;
}
