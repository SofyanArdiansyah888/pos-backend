import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from '../../category/entities/category.entity';

import { VariantEntity } from '../../variant/entities/variant.entity';

@ObjectType()
export class ProductEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  variantId?: number;

  @Field()
  code: string;

  @Field(() => [VariantEntity], { nullable: true })
  variants?: [VariantEntity];

  @Field()
  name: string;

  @Field(() => CategoryEntity, { nullable: true })
  category?: CategoryEntity;

  @Field()
  description: string;

  @Field()
  photo: string;

  @Field()
  isFavourite: boolean;

  @Field()
  price: number;

  @Field()
  isStock: boolean;

  // @Field()
  // orderProduct:[OrderProduct]

  @Field()
  uom: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
