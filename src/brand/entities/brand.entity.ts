import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BrandEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name:string

  @Field()
  createdAt?:Date

  @Field()
  updatedAt?:Date
}
