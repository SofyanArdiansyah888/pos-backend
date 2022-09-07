import { ObjectType, Field, Int } from '@nestjs/graphql';


@ObjectType()
export class OrderProductEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  orderId: number;

  @Field()
  orderNumber: string;

  @Field()
  productName: string;

  @Field()
  variantName: string;

  @Field()
  amount: number;

  @Field()
  uom: string;

  @Field()
  price: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
