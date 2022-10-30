import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WastedStock {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
