import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '@prisma/client';

@ObjectType()
export class VariantEntity {
  @Field(() => Int)
  id: number;

  @Field()
  productId: number;

  @Field()
  product: Product;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  capital: number;

  @Field()
  code: string;

  @Field()
  isStock: boolean;

  @Field()
  stock: number;

  @Field()
  minimalStock: number;

  @Field()
  uom: string;
}
