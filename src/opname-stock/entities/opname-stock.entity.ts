import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OpnameStock {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
