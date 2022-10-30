import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWastedStockInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
