import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class MaterialEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  stock: number;

  @Field()
  minimalStock: number;

  @Field({ nullable: true })
  code: string;

  @Field()
  type: MATERIAL_TYPE;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
export enum MATERIAL_TYPE {
  RAW = 'RAW',
  SUPPORT = 'SUPPORT',
}

registerEnumType(MATERIAL_TYPE, {
  name: 'MATERIAL_TYPE',
});
