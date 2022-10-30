import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class IncomingStock {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
