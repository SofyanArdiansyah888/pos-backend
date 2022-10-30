import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOpnameStockInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
