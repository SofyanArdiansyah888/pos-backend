import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { VariantEntity } from 'src/variant/entities/variant.entity';
import { CreateVariantInput } from '../../variant/input/create-variant.input';

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @Field(() => [CreateVariantInput])
  variants: CreateVariantInput[];

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
