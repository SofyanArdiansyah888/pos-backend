import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateIncomingStockInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
