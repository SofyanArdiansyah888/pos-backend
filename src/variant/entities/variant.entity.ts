import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from '../../product/entities/product.entity';

@ObjectType()
export class VariantEntity {
  @Field(() => Int,{nullable:true})
  id: number;

  @Field()
  productId?: number;

  @Field(() => ProductEntity, {nullable:true})
  product: ProductEntity;

  @Field(() => String)
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
