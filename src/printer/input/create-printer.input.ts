import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePrinterInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
