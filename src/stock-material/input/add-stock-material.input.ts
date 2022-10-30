import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class AddStockMaterialInput {
  @Field(() => Int)
  materialId: number;

  @Field()
  @IsNumber()
  startStock: number;

  @Field()
  @IsNumber()
  inStock: number;

  @Field()
  @IsNumber()
  sellStock: number;

  @Field()
  @IsNumber()
  endStock: number;

  @Field()
  uom: string;
}
