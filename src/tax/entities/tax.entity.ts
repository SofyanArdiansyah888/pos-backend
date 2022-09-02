import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TaxEntity {
  @Field(() => Int)
  id: number;

  @Field()
  amount:number

  @Field()
  description:string

  @Field()
  createdAt?:Date

  @Field()
  updatedAt?:Date


}
