import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MaterialEntity } from '../../material/entities/material.entity';

@ObjectType()
export class StockMaterialEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  startStock: number;

  @Field(() => Int)
  inStock: number;

  @Field(() => Int)
  sellStock: number;

  @Field(() => Int)
  endStock: number;

  @Field()
  uom: string;

  @Field(() => MaterialEntity, { nullable: true })
  material?: MaterialEntity;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
