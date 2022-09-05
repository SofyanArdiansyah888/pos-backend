import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateVariantInput {


  @Field()
  @IsNotEmpty()
  name: string;

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
