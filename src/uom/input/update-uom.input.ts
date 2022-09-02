import { CreateUomInput } from './create-uom.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUomInput extends PartialType(CreateUomInput) {
  @Field(() => Int)
  id: number;
}
