import { CreateOpnameStockInput } from './create-opname-stock.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOpnameStockInput extends PartialType(CreateOpnameStockInput) {
  @Field(() => Int)
  id: number;
}
