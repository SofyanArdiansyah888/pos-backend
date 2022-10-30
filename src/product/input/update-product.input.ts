import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { UpdateVariantInput } from '../../variant/input/update-variant.input';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @Field(() => [UpdateVariantInput])
  variants: UpdateVariantInput[];

  @Field()
  @IsNumber()
  categoryId: number;

  @Field()
  description: string;

  @Field()
  @IsNotEmpty()
  photo: string;

  @Field()
  @IsNotEmpty()
  isFavourite: boolean;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field()
  @IsNotEmpty()
  isStock: boolean;

  @Field()
  @IsNotEmpty()
  uom: string;
}
