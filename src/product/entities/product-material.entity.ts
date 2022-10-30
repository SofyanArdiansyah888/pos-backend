/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class ProductMaterialEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  materialId: number;

  @Field(() => Int)
  quantity: number;

  @Field()
  createdAt: Date;

  @Field()
  updateddAt: Date;
}
