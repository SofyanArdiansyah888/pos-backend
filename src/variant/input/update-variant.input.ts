import { CreateVariantInput } from './create-variant.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { Prisma } from '@prisma/client';

@InputType()
export class UpdateVariantInput extends PartialType(CreateVariantInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  productId:number

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  capital: number;

  @Field()
  @IsNotEmpty()
  code: string;

  @Field()
  @IsNotEmpty()
  @IsBoolean()
  isStock: boolean;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  minimalStock: number;

  @Field()
  @IsNotEmpty()
  uom: string;
}
