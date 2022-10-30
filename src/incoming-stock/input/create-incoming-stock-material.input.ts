/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
@InputType()
export class CreateIncomingStockMaterialInput {
  // @Field(() => Int)
  // incomingStockId: number;

  @Field(() => Int)
  materialId: number;

  @Field(() => Int)
  capital: number;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  totalCapital: number;
}
