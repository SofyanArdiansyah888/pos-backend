import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class DiscountEntity {
  @Field(() => Int)
  id: number;

  @Field(() => PriceRole)
  discountType:PriceRole

  @Field(() => Int )
  amount:number 

  @Field()
  description:string

  @Field()
  createdAt?:Date

  @Field()
  updatedAt?:Date

}

export enum PriceRole {
  FIXED="FIXED",
  PERCENT="PERCENT",
}

registerEnumType(PriceRole,{
  name:'PriceRole',
})


