import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderProduct {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
